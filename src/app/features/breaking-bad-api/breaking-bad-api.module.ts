import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadApiRoutingModule } from './breaking-bad-api-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'primeng';


@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    BreakingBadApiRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    SharedModule,
    AccordionModule
  ]
})
// @ts-ignore
export class BreakingBadApiModule { }
