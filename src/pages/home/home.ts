import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RappelsPage } from '../rappels/rappels';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToRappels(){
    this.navCtrl.push(RappelsPage);
  }

}
