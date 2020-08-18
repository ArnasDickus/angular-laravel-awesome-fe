import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRoutes } from './core/enums/allroutes.enum';

const routes: Routes = [
  {
    path: AllRoutes.AUTH,
    loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: AllRoutes.TODO,
    loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
