import { Component, OnInit } from '@angular/core';
import { TodosHandler } from 'src/app/lib/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'AngularGraphql';

  constructor(private todos: TodosHandler) {}

  ngOnInit() {
    this.todos.loadTodos();
  }
}
