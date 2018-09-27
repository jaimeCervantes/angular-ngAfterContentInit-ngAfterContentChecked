import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AfterContentModule } from './after-content/after-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AfterContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
