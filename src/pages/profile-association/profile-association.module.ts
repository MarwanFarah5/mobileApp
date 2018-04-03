import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAssociationPage } from './profile-association';

@NgModule({
  declarations: [
    ProfileAssociationPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileAssociationPage),
  ],
})
export class ProfileAssociationPageModule {}
