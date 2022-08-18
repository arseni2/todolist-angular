import {Component, Input} from '@angular/core';
import {ITodo} from "../../models/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: ITodo

  constructor(
    public todosService: TodoService
  ) { }

  changeCompleteHandler(e: any): void {
    this.todosService.setCompleteTodo(this.todo.id, !this.todo.isComplete).subscribe((todo) => this.todo = todo)
  }

  deleteTask(e: any, id: number): void {
    this.todosService.delete(id).subscribe()
  }

}
