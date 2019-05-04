import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RappelFormPage } from './rappel-form';

@NgModule({
  declarations: [
    RappelFormPage,
  ],
  imports: [
    IonicPageModule.forChild(RappelFormPage),
  ],
})
export class RappelFormPageModule {}
