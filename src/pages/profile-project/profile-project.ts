import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Project} from '../../models/project/project.interface';
/**
 * Generated class for the ProfileProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-project',
  templateUrl: 'profile-project.html',
})
export class ProfileProjectPage {
  project :Project

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.project=this.navParams.get('project')
console.log(this.project)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileProjectPage');
  }

}
