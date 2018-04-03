import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProjectPage } from './add-project';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProjectPage),
    MbscModule,
    FormsModule
  ],
})
export class AddProjectPageModule {}
