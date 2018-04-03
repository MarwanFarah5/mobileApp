import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUserPage } from './register-user';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RegisterUserPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterUserPage),
    MbscModule, // add the mobiscroll module
    FormsModule // add the forms module

  ],
})
export class RegisterUserPageModule {}
