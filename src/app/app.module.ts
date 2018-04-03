import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MbscModule } from '@mobiscroll/angular-trial';
import { FormsModule } from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.config';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FileChooser } from '@ionic-native/file-chooser';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import {GoogleMaps} from '@ionic-native/google-maps'


@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MbscModule,
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    FileChooser,
    AngularFirestore,

    Camera,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
