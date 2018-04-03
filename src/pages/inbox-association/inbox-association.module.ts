import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxAssociationPage } from './inbox-association';

@NgModule({
  declarations: [
    InboxAssociationPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxAssociationPage),
  ],
})
export class InboxAssociationPageModule {}
