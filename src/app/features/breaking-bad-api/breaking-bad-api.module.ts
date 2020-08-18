import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakingBadApiRoutingModule } from './breaking-bad-api-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BreakingBadApiRoutingModule
  ]
})
// @ts-ignore
export class BreakingBadApiModule { }
