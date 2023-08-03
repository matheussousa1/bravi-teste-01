import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormCompomentComponent } from './components/form-compoment/form-compoment.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCompomentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
