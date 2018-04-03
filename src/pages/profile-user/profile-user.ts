import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from '../../models/user-profile/userProfile.interface';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
//keytool -genkey -v -keystore 123456.keystore -alias mobileApp -keyalg RSA -keysize 2048 -validity 10000

/**
 * Generated class for the ProfileUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-user',
  templateUrl: 'profile-user.html',
})
export class ProfileUserPage {
items :Observable<any[]>
ite :Observable<any>
  constructor(private db :AngularFirestore ,private storage: AngularFireStorage , private database: AngularFireDatabase ,private Auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.items = database.list(`/associationsProfiles/`).valueChanges();
  }
  getA  (name){
  return  this.ite = this.database.object(`/associationsProfiles/${name}`).valueChanges();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUserPage');
  }

}
