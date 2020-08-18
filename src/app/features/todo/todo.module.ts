import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
// @ts-ignore
export class TodoModule { }
