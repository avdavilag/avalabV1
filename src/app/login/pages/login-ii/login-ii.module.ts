import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIIPageRoutingModule } from './login-ii-routing.module';

import { LoginIIPage } from './login-ii.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIIPageRoutingModule
  ],
  declarations: [LoginIIPage]
})
export class LoginIIPageModule {}
