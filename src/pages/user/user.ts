import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {User} from 'firebase/app';
import {Subscription} from 'rxjs/Subscription';
import { async } from '@firebase/util';
import {UserProfile} from '../../models/user-profile/userProfile.interface';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})

export class UserPage {
profile1 ={} as UserProfile
user ={} as Observable<User>
uid ={} as string
sub : Subscription
profile : Observable<UserProfile>
  constructor(private database :AngularFireDatabase,private Auth :AngularFireAuth , public navCtrl: NavController, public navParams: NavParams) {
this.profile = this.database.object<UserProfile>(`/usersProfiles/`+this.Auth.auth.currentUser.uid).valueChanges()
//this.sub = this.database.object<UserProfile>(`/usersProfiles/`+this.Auth.auth.currentUser.uid).snapshotChanges().subscribe(profile => {
  //if(profile){
  //  this.profile1 = profile.payload.val()
    //this.profile =profile.payload.val()
    //this.uid=profile.payload.val().FirstName.toString()
    //console.log("mena")
  //  this.profile = this.profile1
  //  console.log(this.profile1)
  //}
//})
console.log(this.profile)
console.log(this.profile1)
}



  ionViewDidLoad() {
    this.uid= this.Auth.auth.currentUser.uid
    //console.log(this.uid)
}
}
