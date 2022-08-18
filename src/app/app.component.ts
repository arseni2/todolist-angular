import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'my-app';
  loading: boolean = true;

  constructor(
    public todosService: TodoService,
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    this.todosService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
