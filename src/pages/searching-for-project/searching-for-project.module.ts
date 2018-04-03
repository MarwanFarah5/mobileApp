import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchingForProjectPage } from './searching-for-project';

@NgModule({
  declarations: [
    SearchingForProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchingForProjectPage),
  ],
})
export class SearchingForProjectPageModule {}
