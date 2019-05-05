import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { AuthService } from '../../services/Auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage implements OnInit {

  mode: string;
  authForm : FormGroup;;
  errorMessage: string

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private authService: AuthService,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }

  ngOnInit(){
    this.mode = this.navParams.get('mode');
    this.initForm();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitForm(){
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;

    if (this.mode === 'new') {
      this.authService.signUpUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else if (this.mode === 'connect') {
      this.authService.signInUser(email, password).then(
        () => {
          this.navCtrl.setRoot(TabsPage);
        }
      ),
      (error) => {
        this.errorMessage = error;
      }
    };
  }

}