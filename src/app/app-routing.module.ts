import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: '',redirectTo: 'login',pathMatch: 'full'},
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
  path: 'login',
  loadChildren: () => import('./login/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'login-ii',
    loadChildren: () => import('./login/pages/login-ii/login-ii.module').then( m => m.LoginIIPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
