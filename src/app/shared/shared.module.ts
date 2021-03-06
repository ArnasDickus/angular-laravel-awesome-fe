import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AccordionModule } from 'primeng/accordion';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [AuthenticationComponent, SpinnerComponent],
  exports: [
    SpinnerComponent,
    RadioButtonModule,
    AccordionModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    RadioButtonModule
  ]
})

export class SharedModule { }
