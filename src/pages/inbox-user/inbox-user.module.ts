import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxUserPage } from './inbox-user';

@NgModule({
  declarations: [
    InboxUserPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxUserPage),
  ],
})
export class InboxUserPageModule {}
