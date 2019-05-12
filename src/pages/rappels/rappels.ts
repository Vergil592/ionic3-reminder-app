import { Component, ViewContainerRef, Inject, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { SingleRappelPage } from '../single-rappel/single-rappel';
import { Rappel } from '../../models/rappel.model';
import { RappelsService } from '../../services/rappels.service';
import { RappelFormPage } from './rappel-form/rappel-form';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-rappels',
  templateUrl: 'rappels.html',
})

export class RappelsPage implements OnInit, OnDestroy {

  rappelsList: Rappel[];
  rappelSubscription: Subscription;

  constructor(
    //public navCtrl: NavController, 
    //public navParams: NavParams,
    private modalCtrl: ModalController,
    private rappelsService: RappelsService,
    private menuCtrl: MenuController,
    private navCtrl: NavController
    ) {
  }

  ngOnInit(){
    this.rappelSubscription = this.rappelsService.rappel$.subscribe(
      (rappels: Rappel[]) => {
        this.rappelsList = rappels.slice();
      }
    );
    this.rappelsService.emitRappel();
  }

  ngOnDestroy(){
    this.rappelSubscription.unsubscribe();
  }

  ionViewWillEnter(){
    this.rappelsList = this.rappelsService.rappelList.slice() ;
  }

  onLoadRappel(index: number){
    //this.navCtrl.push(SingleRappelPage, {rappel: rappel});
    let modal = this.modalCtrl.create(SingleRappelPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onNewRappel() {
    this.navCtrl.push(RappelFormPage);
  }

}
