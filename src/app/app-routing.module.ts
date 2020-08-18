import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/404/404.component';
// import {TodoListComponent} from './pages/todo/todo-list/todo-list.component';
// import {NotFoundComponent} from './components/404/404.component';
// import {AllRoutes} from './core/enums/allroutes.enum';
// import {RegisterComponent} from './pages/register/register.component';
// import {LoginComponent} from './pages/login/login.component';
// import {AuthenticationComponent} from './core/layouts/authentication/authentication.component';
// import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: '', component: AuthenticationComponent,
  //   children: [
  //     { path: AllRoutes.REGISTER, component: RegisterComponent},
  //     { path: AllRoutes.LOGIN, component: LoginComponent },
  //     { path: AllRoutes.FORGOTPASSWORD, component: ForgotPasswordComponent }
  //   ]},
  //
  // { path: AllRoutes.ADMIN,
  //   children: [
  //     { path: AllRoutes.TODO, component: TodoListComponent},
  //   ] },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
