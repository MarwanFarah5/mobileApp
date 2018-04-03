import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular-trial';
import {  MbscDatetimeOptions } from '@mobiscroll/angular-trial';
import {association} from '../../models/association/association.interface';
import {type} from '../../models/type/type.interface';
import {Account} from '../../models/account/account.interface';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireObject} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import {User} from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';


/**
 * Generated class for the RegisterAssociationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-association',
  templateUrl: 'register-association.html',
})
export class RegisterAssociationPage {
  Ass = {} as association
  account = {} as Account
  type = {} as type
  filePath :  string
  profilObject: AngularFireObject<association>
  typeObject: AngularFireObject<type>

  constructor(private storage: AngularFireStorage , private database: AngularFireDatabase ,private Auth:AngularFireAuth , public navCtrl: NavController, public navParams: NavParams ) {
  }

  async RegistreAssotiation(){


        this.type.type ="Association"
    try{
      const user: User = await this.Auth.auth.createUserWithEmailAndPassword(this.account.email,this.account.password)
console.log(user.uid)
      this.profilObject = this.database.object(`/associationsProfiles/${user.uid}`);
      this.typeObject = this.database.object(`/type/${user.uid}`);
    
          try{
            await this.profilObject.set(this.Ass)
            await this.typeObject.set(this.type)

          }catch(e){
            console.log(e.message)

          }
      console.log("you did it")
    }catch(e){
      console.log(e.message)
    }
        this.Auth.auth.signInWithEmailAndPassword(this.account.email ,this.account.password)
        this.navCtrl.setRoot("PostRegistrationAssociationPage")
  }
  settings: MbscSelectOptions = {
      theme: 'ios',
      lang: 'ar',
      display: 'bottom',
      minWidth: 200
  };
  headerSettings: MbscSelectOptions = {
      theme: 'ios',
      lang: 'ar',
      display: 'bottom',
      minWidth: 200,
      headerText: 'Pick location'
  };
  nonFormSettings: MbscSelectOptions = {
      theme: 'ios',
      lang: 'en',
      display: 'bottom',
      minWidth: 200,
      inputClass: 'Pick location'
  };
  externalSettings: MbscSelectOptions = {
      theme: 'ios',
      lang: 'ar',
      display: 'bottom',
      minWidth: 200,
      inputClass: 'demo-non-form',
      showOnTap: false
  };


    demoSettings: MbscDatetimeOptions = {
        theme: 'ios',
        lang: 'en',
        display: 'bottom'
    };

}
