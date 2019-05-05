import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RappelsPage } from '../pages/rappels/rappels';
import { SingleRappelPage } from '../pages/single-rappel/single-rappel';
import { SettingsPage } from '../pages/settings/settings';
import { RappelsService } from '../services/rappels.service';
import { OptionsPage } from '../pages/options/options';
import { RappelFormPage } from '../pages/rappels/rappel-form/rappel-form';
import { AuthService } from '../services/Auth.service';
import { AuthPage } from '../pages/Auth/auth';

import * as firebase from 'firebase';
import { firebaseConfig } from '../config';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RappelsPage,
    SingleRappelPage,
    SettingsPage,
    OptionsPage,
    RappelFormPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    RappelsPage,
    SingleRappelPage,
    SettingsPage,
    OptionsPage,
    RappelFormPage,
    AuthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RappelsService,
    AuthService
  ]
})
export class AppModule {}
