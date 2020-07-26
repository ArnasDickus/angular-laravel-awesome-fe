import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public form: any;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
  }

  public ngOnInit(): void {
    this.buildTaskForm();
  }

  public onSubmit(): void {
    console.log(this.form.value);
    this.todoService.receiveFormData(this.form.value);
    this.form.reset();
  }

  public onDelete(event): void {
    console.log(event);
  }

  public buildTaskForm(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required]]
    });
  }
}
