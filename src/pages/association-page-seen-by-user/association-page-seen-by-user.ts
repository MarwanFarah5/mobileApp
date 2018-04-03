import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Project} from '../../models/project/project.interface';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular-trial';
import {  MbscDatetimeOptions } from '@mobiscroll/angular-trial';

/**
 * Generated class for the AssociationPageSeenByUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-association-page-seen-by-user',
  templateUrl: 'association-page-seen-by-user.html',
})
export class AssociationPageSeenByUserPage {
Asses :Observable<any[]>
  constructor(private db :AngularFirestore ,private storage: AngularFireStorage , private database: AngularFireDatabase ,private Auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
this.Asses = this.database.list(`/associationsProfiles/`).valueChanges()
  }
search(value){
if(value!=''){
this.Asses = this.database.list(`/associationsProfiles/`,  ref => ref.orderByChild('AssociationName').equalTo(value)).valueChanges()
}else{
this.Asses = this.database.list(`/associationsProfiles/`).valueChanges()

}
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AssociationPageSeenByUserPage');
  }

}
