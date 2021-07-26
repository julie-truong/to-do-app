import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TextEditableComponent } from './components/todos/text-editable.directive';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';


@NgModule({
  // List of Angular things relvant to module
  declarations: [
    AppComponent,
    TodosComponent, 
    TextEditableComponent
  ],
  // list of other NgModules needed for the module
  imports: [
    BrowserModule, 
    FormsModule, 
  ],
  providers: [],
  // Only relevant to root NgModule
  bootstrap: [AppComponent]
})
export class AppModule { }
