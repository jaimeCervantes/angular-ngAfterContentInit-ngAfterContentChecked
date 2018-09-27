import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { ChildComponent } from './child.component';
import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'lch-after-content-child',
  templateUrl: './after-content-child.component.html', 
})
export class AfterContentChildComponent implements AfterContentChecked, AfterContentInit {
  private personaAnterior = '';
  comment = '';

  // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('Ejecución del contructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.personaAnterior === this.contentChild.persona) {
      this.logIt('AfterContentChecked (Sin cambios)');
    } else {
      this.personaAnterior = this.contentChild.persona;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.persona.length > 10 ? `Es un nombre muy grande` : '';
  }

  private logIt(method: string) {
    let child = this.contentChild;
    let message = `${method}: ${child ? child.persona : 'no'} child content`;
    this.logger.log(message);
  }
  // ...
}