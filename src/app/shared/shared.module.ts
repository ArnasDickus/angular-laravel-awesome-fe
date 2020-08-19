import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [AuthenticationComponent, SpinnerComponent],
  exports: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule
  ]
})
// @ts-ignore
export class SharedModule { }
