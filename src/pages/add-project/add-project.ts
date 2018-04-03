import { Component , ElementRef ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular-trial';
import {  MbscDatetimeOptions } from '@mobiscroll/angular-trial';
import {Project} from '../../models/project/project.interface';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
declare var google;
import { AngularFireStorage } from 'angularfire2/storage';
import {it} from '../../data/data';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
  @ViewChild('map') mapElement :ElementRef ;
  map: any ;
  project = {} as Project
  projectObject :AngularFireList<Project>
  items = it

  constructor(private database: AngularFireDatabase,private Auth :AngularFireAuth  , public navCtrl: NavController, public navParams: NavParams) {

  }

  addMarker(){

   let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,

    position: this.map.getCenter()
   });

  this.project.Lat = marker.getPosition().lat()
  this.project.Lng = marker.getPosition().lng()
   let content = "<h4>your project will be release here !!</h4>";

   this.addInfoWindow(marker, content);
  }
  async addNewProject(){
    try{

      this.projectObject = this.database.list(`/associationsProject/${this.Auth.auth.currentUser.uid}`);
      this.project.Association = this.Auth.auth.currentUser.uid
          try{
            await this.projectObject.push(this.project)


          }catch(e){
            console.log(e.message)

          }
      console.log("you did it")
      this.navCtrl.setRoot("ListOfProjectMadePage")
    }catch(e){
      console.log(e.message)
    }

  }

//   });
loadMap(){

  let latLng = new google.maps.LatLng(4.0383,21.7587);

  let mapOptions = {
   center: latLng,
   zoom: 3,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  }
 let latLng1 = new google.maps.LatLng(28.0339,1.6596)
 let latLng2 = new google.maps.LatLng(46.2276,2.2137)
 let content = "<h4>Information!</h4>";
 let content2 = "<h4>oooo</h4>";
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  var marker = new google.maps.Marker({
         position: latLng1,
         label: 'Algeria',
         map: this.map
       });
       var marker = new google.maps.Marker({
              position: latLng,
              label: 'Tunis',

              map: this.map

            });
            var marker1 = new google.maps.Marker({
                   position: latLng2,
                   label: 'Moknin city',
                   map: this.map

                 });
this.addInfoWindow(marker1, content2);
this.addInfoWindow(marker, content);
 }
 addInfoWindow(marker, content){

 let infoWindow = new google.maps.InfoWindow({
  content: content
 });

 google.maps.event.addListener(marker, 'click', () => {
 infoWindow.open(this.map, marker);
//this.navCtrl.push(AliouaPage, {
  //val: 'asbaer'

//})

 });

}

  ionViewDidLoad() {
    this.loadMap();
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
