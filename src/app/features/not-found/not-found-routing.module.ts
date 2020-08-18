import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/404/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class NotFoundRoutingModule { }
