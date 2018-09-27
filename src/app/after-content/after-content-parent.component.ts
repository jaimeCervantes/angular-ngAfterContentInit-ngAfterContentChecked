import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { ChildComponent } from './child.component';
import { LoggerService }  from '../services/logger.service';

@Component({
  selector: 'lch-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService]
})
export class AfterContentParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LoggerService) {
    this.logs = logger.logs;
  }

  reset() {
    this.logs.length = 0;
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/