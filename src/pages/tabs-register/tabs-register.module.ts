import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsRegisterPage } from './tabs-register';

@NgModule({
  declarations: [
    TabsRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsRegisterPage),
  ],
})
export class TabsRegisterPageModule {}
