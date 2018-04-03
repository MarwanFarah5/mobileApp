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
 * Generated class for the ListOfProjectMadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-project-made',
  templateUrl: 'list-of-project-made.html',
})
export class ListOfProjectMadePage {
ens :any[]
items :Observable<any[]>
liste :AngularFireList<Project>
items1 :Observable<any[]>
it :Project

  constructor(private db :AngularFirestore ,private storage: AngularFireStorage , private database: AngularFireDatabase ,private Auth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
   this.items = database.list(`/associationsProject/${this.Auth.auth.currentUser.uid}`).valueChanges();


//console.log(this.it)
  

  }
  profileProject(value :Project){
    this.navCtrl.push("ProfileProjectPage",{project :value})

  }

test(){
//  this.database.list(`/associationsProject/${this.Auth.auth.currentUser.uid}`).snapshotChanges().subscribe(actions => {
  // actions.forEach(action => {
    // console.log(action.type);
     //console.log(action.key);
     //this.it = action.payload.val() as Project
     ///console.log(this.it)
     //this.navCtrl.push("MenuUserPage",this.it)
   //});
 //});
}
  addNewProject(){
    this.navCtrl.push("AddProjectPage")
  }

ionViewDidLoad(){


}
}
