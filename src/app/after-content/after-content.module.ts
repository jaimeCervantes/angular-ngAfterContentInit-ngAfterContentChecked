import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentParentComponent } from './after-content-parent.component';
import { AfterContentChildComponent } from './after-content-child.component';
import { ChildComponent } from './child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations:[
    AfterContentParentComponent,
    AfterContentChildComponent,
    ChildComponent
  ],
  exports: [
    AfterContentParentComponent
  ]
})
export class AfterContentModule {}
