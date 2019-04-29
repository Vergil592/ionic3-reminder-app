import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RappelsPage } from './rappels';

@NgModule({
  declarations: [
    RappelsPage,
  ],
  imports: [
    IonicPageModule.forChild(RappelsPage),
  ],
})
export class RappelsPageModule {}
