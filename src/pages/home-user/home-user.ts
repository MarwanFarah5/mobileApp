import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})
export class HomeUserPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;


  constructor() {
    this.tab1Root= "ProfileUserPage";
    this.tab2Root= "SearchingForProjectPage" ;
    this.tab3Root= "InboxUserPage";
    this.tab4Root= "AssociationPageSeenByUserPage";
  }



}
