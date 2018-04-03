import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssociationPageSeenByUserPage } from './association-page-seen-by-user';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AssociationPageSeenByUserPage,
  ],
  imports: [
    IonicPageModule.forChild(AssociationPageSeenByUserPage),
    MbscModule,
    FormsModule
  ],
})
export class AssociationPageSeenByUserPageModule {}
