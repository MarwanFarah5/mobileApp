import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAssociationPage } from './register-association';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterAssociationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAssociationPage),MbscModule, // add the mobiscroll module
    FormsModule // add the forms module
  ],
})
export class RegisterAssociationPageModule {}
