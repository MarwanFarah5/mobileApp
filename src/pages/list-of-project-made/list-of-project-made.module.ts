import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfProjectMadePage } from './list-of-project-made';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListOfProjectMadePage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfProjectMadePage),
    MbscModule, // add the mobiscroll module
    FormsModule 
  ],
})
export class ListOfProjectMadePageModule {}
