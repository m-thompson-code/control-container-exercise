import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { MiddleComponent } from './components/middle/middle.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ParentComponent,
    MiddleComponent,
    ChildComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
