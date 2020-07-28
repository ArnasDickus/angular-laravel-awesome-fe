import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './pages/todo/todo-list/todo-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AllRoutes} from './core/enums/allroutes.enum';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  { path: AllRoutes.TODO, component: TodoListComponent},
  { path: AllRoutes.REGISTER, component: RegisterComponent},
  { path: AllRoutes.LOGIN, component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
