import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from '../../../core/services/todo/todo.service';
import { TodoItems } from '../../../core/interfaces/todo-items';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public form: any;
  public tasks: TodoItems[];
  public deleteTaskSuccessMessage: boolean;
  public deleteTaskFailedMessage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {
  }

  public ngOnInit(): void {
    this.buildTaskForm();
    this.displayTasks();
  }

  public onSubmit(): void {
    this.todoService.sendFormData(this.form.value);

    // TODO Replace setTimeout with waiting for deleteTask
    setTimeout((() => {
      this.displayTasks();
    }), 1000);
    this.form.reset();
  }

  public onDelete(id): void {
    this.todoService.deleteTask(id);
    // TODO Replace setTimeout with waiting for deleteTask
    setTimeout((() => {
      this.displayTasks();
    }), 1000);



  }

  public buildTaskForm(): void {
    this.form = this.formBuilder.group({
      task: ['', [Validators.required]]
    });
  }

  public displayTasks(): void {
    this.todoService.fetchFormData().subscribe((task: TodoItems[]) => {
        this.tasks = task;
    });
  }
}
