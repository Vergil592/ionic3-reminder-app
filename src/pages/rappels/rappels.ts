import { Component, ViewContainerRef, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { SingleRappelPage } from '../single-rappel/single-rappel';
import { Rappel } from '../../models/rappel';
import { RappelsService } from '../../services/rappels.service';

@IonicPage()
@Component({
  selector: 'page-rappels',
  templateUrl: 'rappels.html',
})

export class RappelsPage {

  rappelsList: Rappel[];

  constructor(
    //public navCtrl: NavController, 
    //public navParams: NavParams,
    private modalCtrl: ModalController,
    private rappelsService: RappelsService,
    private menuCtrl: MenuController
    ) {
  }

  ionViewWillEnter(){
    this.rappelsList = this.rappelsService.rappelList.slice() ;
  }

/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad RappelsPage');
  }
*/

  onLoadRappel(index: number){
    //this.navCtrl.push(SingleRappelPage, {rappel: rappel});
    let modal = this.modalCtrl.create(SingleRappelPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
