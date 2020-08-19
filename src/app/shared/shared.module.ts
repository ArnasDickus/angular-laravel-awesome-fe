import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [AuthenticationComponent, SpinnerComponent],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
// @ts-ignore
export class SharedModule { }
