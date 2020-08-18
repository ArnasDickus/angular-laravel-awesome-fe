import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
// @ts-ignore
export class SharedModule { }
