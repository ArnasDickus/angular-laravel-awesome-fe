import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadApiRoutingModule } from './breaking-bad-api-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    BreakingBadApiRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ]
})
// @ts-ignore
export class BreakingBadApiModule { }
