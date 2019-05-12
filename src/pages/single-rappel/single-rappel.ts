import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, MenuController } from 'ionic-angular';
import { RappelsPage } from '../rappels/rappels';
import { Rappel } from '../../models/rappel.model';
import { RappelsService } from '../../services/rappels.service';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-single-rappel',
  templateUrl: 'single-rappel.html',
})
export class SingleRappelPage {

  index: number;
  rappel : Rappel;

  constructor(
  //  public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public rappelsService: RappelsService,
    private menuCtrl: MenuController
    ) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.rappel = this.rappelsService.rappelList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleRappel(){
    this.rappel.isActif = !this.rappel.isActif;
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onRemoveRappel(index: number){
    this.rappelsService.removeRappel(index);
  }
  
  onSubmitForm(form: NgForm){
    console.log(form.value);
    this.dismissModal();
  }
}
