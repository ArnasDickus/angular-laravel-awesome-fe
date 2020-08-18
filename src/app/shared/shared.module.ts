import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule
  ]
})
// @ts-ignore
export class SharedModule { }
