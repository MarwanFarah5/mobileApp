import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAssociationPage } from './home-association';

@NgModule({
  declarations: [
    HomeAssociationPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAssociationPage),
  ],
})
export class HomeAssociationPageModule {}
