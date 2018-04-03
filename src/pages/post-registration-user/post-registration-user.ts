import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';

//import { Firebase } from '@ionic-native/firebase';
import {AngularFireAuth} from 'angularfire2/auth';

import { FIREBASE_CONFIG } from '../../app/firebase.config';
import { ToastController } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';
declare var window: any;


import * as firebase from 'firebase/app';

import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PostRegistrationUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-registration-user',
  templateUrl: 'post-registration-user.html',
})
export class PostRegistrationUserPage {
pom :Promise<any>

mySelectedPhoto;
   loading;
   currentPhoto ;
imgSource;
  constructor(private Auth :AngularFireAuth,private file: File ,private fileChooser :FileChooser, public loadingCtrl:LoadingController ,public camera:Camera ,public navCtrl: NavController, public navParams: NavParams) {
//firebase.initializeApp(FIREBASE_CONFIG)
//export ANDROID_HOME=/home/marwan/android-sdk-linux
//export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
//export PATH=$PATH:/opt/gradle/gradle-4.6/bin
  }

  getPhoto(){

   this.fileChooser.open().then((uri)=>{
     alert(uri);



   })
 }

 async uploadd(buffer, name){
   let blob = new Blob([buffer], { type: "image/jpeg"});

   let storage = firebase.storage();

   storage.ref(`${this.Auth.auth.currentUser.uid}/` + name).put(blob).then((d)=>{
     alert("Done");
   }).catch((error)=>{
     alert(JSON.stringify(error))
   })

 }



  takePhoto(){
const options: CameraOptions = {
    quality : 100,
    targetHeight:200,
    targetWidth:200,
    destinationType : this.camera.DestinationType.DATA_URL,
    encodingType:this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) =>{
    this.loading = this.loadingCtrl.create({
        content: "Taking photo wait ..."
         });
  this.loading.present();
  alert('data:image/jpeg;base64,'+imageData)
this.mySelectedPhoto = this.dataURLtoBlob('data:image/jpeg;base64,'+imageData);
    this.upload();

        },(err)=>{
    alert(err.messge)

        });


}



dataURLtoBlob(myURL){
    let binary = atob(myURL.split(',')[1]);
let array = [];
for (let i = 0 ; i < binary.length;i++){
    array.push(binary.charCodeAt(i));
}
    return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
}


upload(){
if(this.mySelectedPhoto){
    var uploadTask = firebase.storage().ref().child(`${this.Auth.auth.currentUser.uid}/myphoto.jpg`).put(this.mySelectedPhoto);
    uploadTask.then(this.onSuccess,this.onErrors);
}
}

onSuccess=(snapshot)=>{
    this.currentPhoto = snapshot.downloadURL;
    this.loading.dismiss();
}

onErrors=(error)=>{
    console.log(error);
    this.loading.dismiss();
}

getMyURL(){
    firebase.storage().ref().child(`${this.Auth.auth.currentUser.uid}/myphoto.jpg`).getDownloadURL().then((url)=>{
        this.imgSource = url;
        })
}
}
