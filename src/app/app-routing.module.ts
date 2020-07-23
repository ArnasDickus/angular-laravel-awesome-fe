import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoListComponent} from './pages/todo/todo-list/todo-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import { AllRoutes } from './core/enums/allroutes.enum';

const routes: Routes = [
  { path: AllRoutes.TODO, component: TodoListComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
