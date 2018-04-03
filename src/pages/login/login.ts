import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from '../../models/user-profile/userProfile.interface';
import {type} from '../../models/type/type.interface';
import {Account} from '../../models/account/account.interface';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {User} from 'firebase/app';
import {Subscription} from 'rxjs/Subscription';
import { async } from '@firebase/util';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  account= {} as Account
  type = {} as type
  typeLog : Observable<any>
  userType : Subscription
  userid : string
  constructor(private database: AngularFireDatabase ,private Auth:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams ) {
  }
   LogIn(){
try{
    const u =  this.Auth.auth.signInWithEmailAndPassword(this.account.email ,this.account.password)
      this.Auth.authState.subscribe(user => {
        if(user) {this.userid = user.uid
        //console.log(this.userid)
        this.userType=  this.database.object(`/type/`+this.userid).snapshotChanges().subscribe(action => {
      //  this.type=action.payload.val.bind(this.type)

        this.navCtrl.push('Home'+action.payload.val().type+'Page')

       })
      // console.log(this.type)
      }
      })
console.log(this.type)

  //  console.log(`type/`+this.userid)
  }catch(e){
    console.log(e.message)
  }
  }
  NavigateToRegisterUserPage(){
    this.navCtrl.push("TabsRegisterPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
