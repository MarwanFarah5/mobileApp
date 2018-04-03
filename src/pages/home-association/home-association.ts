import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomeAssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-association',
  templateUrl: 'home-association.html',
})
export class HomeAssociationPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;



  constructor() {
    this.tab1Root= "ProfileAssociationPage";
    this.tab2Root= "ListOfProjectMadePage" ;
    this.tab3Root= "InboxAssociationPage";

  }
}
