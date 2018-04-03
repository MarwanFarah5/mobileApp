import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs-page',
  templateUrl: 'tabs-page.html',
})
export class TabsRegisterPage {



  tab1Root: string;
  tab2Root: string;


  constructor() {
    this.tab1Root = 'RegisterUserPage';
    this.tab2Root = 'RegisterAssociationPage';

  }
}
