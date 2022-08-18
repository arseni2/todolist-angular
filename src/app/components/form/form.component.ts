import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(
    public todosService: TodoService
  ) { }

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2)
    ])
  })

  get title() {
    return this.form.controls.title as FormControl
  }

  submit() {
    this.todosService.createTodo(this.form.value.title as string).subscribe()
    this.form.reset({title: ''})
  }

}
