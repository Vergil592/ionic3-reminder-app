import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//PAGES
import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
import { AuthPage } from '../pages/Auth/auth';

// FIRE BASE BACK & AUTH
import * as firebase from 'firebase';
//Config firebase
import { firebaseConfig } from '../config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage:any = TabsPage;
  optionsPage:any = OptionsPage;
  authPage:any = AuthPage;

  @ViewChild('content') content: NavController;

  isAuth: boolean = false;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
    ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
          this.content.setRoot(TabsPage);
        } else {
          this.isAuth = false;
          this.content.setRoot(AuthPage, {mode: 'connect'});
        }
      }
    );

  });

  }

  onNavigate(page: any, data?: {}){
    this.content.setRoot(page, data ? data: null);
    this.menuCtrl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}
