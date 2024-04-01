import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '',pathMatch:'full', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule),canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
