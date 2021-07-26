import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';


@Component({
  // Selector is how we use component in other components
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // Empty array of todos following certain model
  title: string;
  todos:Todo[];

  inputTodo:string = "";

  constructor() { 
  }

  ngOnInit(): void {
    this.todos = [ 
      {
        content: 'Completed todo', 
        completed: true
      }, 
      {
        content: 'Add a todo', 
        completed: false
      },
      {
        content: 'Completed todo', 
        completed: true
      }
    ]
  }
  
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    }) 
  }

  deleteTodo(id:number) {
    // Use array filter method
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    // Only add if not empty
    if(this.inputTodo != ""){
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });
    
      // Clear input after adding new todo
      this.inputTodo = "";
    }
    
  }

  clearCompleted() {
    this.todos = this.todos.filter((v, i) => v.completed==false);
  }

}
