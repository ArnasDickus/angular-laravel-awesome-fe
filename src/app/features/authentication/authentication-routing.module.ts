import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AuthenticationRoutingModule { }
