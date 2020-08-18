import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { AllRoutes } from '../../core/enums/allroutes.enum';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: AllRoutes.FORGOTPASSWORD,
    component: ForgotPasswordComponent,
  },
  {
    path: AllRoutes.LOGIN,
    component: LoginComponent,
  },
  {
    path: AllRoutes.REGISTER,
    component: RegisterComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AuthenticationRoutingModule { }
