import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Project} from '../../models/project/project.interface';


@IonicPage()
@Component({
  selector: 'page-menu-user',
  templateUrl: 'menu-user.html',
})
export class MenuUserPage {
 it :Project
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.it = navParams.get("status")
console.log(this.it)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuUserPage');
  }

}
