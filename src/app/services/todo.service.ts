import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITodo} from "../models/todo";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private http: HttpClient
  ) {}

  todos: ITodo[] = []

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('http://localhost:7000/todo/all').pipe(
      map(todo => {
        todo.sort((a, b) => {
          return a.id < b.id ? -1 : 1;
        })
        return this.todos = todo
      })
    )
  }

  setCompleteTodo(id: number, complete: boolean): Observable<ITodo> {
    return this.http.patch<ITodo>(`http://localhost:7000/todo/${id}`, {isComplete: complete}).pipe(
        tap(todo => {
          return todo
        })
      )
  }

  delete(id: number): Observable<never> {
    this.todos = this.todos.filter(todo => todo.id !== id)
    return this.http.delete<never>(`http://localhost:7000/todo/${id}`)
  }

  createTodo(title: string) {
    return this.http.post<ITodo>('http://localhost:7000/todo/create', {title}).pipe(
      tap(todo => {
        this.todos.push(todo)
        return this.todos
      })
    )
  }
}
