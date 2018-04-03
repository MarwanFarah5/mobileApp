import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostRegistrationUserPage } from './post-registration-user';

@NgModule({
  declarations: [
    PostRegistrationUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PostRegistrationUserPage),
  ],
})
export class PostRegistrationUserPageModule {}
