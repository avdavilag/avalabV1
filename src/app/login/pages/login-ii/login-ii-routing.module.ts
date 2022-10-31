import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginIIPage } from './login-ii.page';

const routes: Routes = [
  {
    path: '',
    component: LoginIIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginIIPageRoutingModule {}
