import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Rappel } from '../../../models/rappel.model';
import { RappelsService } from '../../../services/rappels.service';

//@IonicPage()
@Component({
  selector: 'page-rappel-form',
  templateUrl: 'rappel-form.html',
})
export class RappelFormPage {

  rappelForm: FormGroup ;

  constructor(
    public navCtrl: NavController, 
    // public navParams: NavParams,
    private formBuilder: FormBuilder,
    private rappelService: RappelsService
    ) { }

    ngOnInit(){
      this.initForm();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RappelFormPage');
  }

  initForm(){
    this.rappelForm = this.formBuilder.group({
      name:['', Validators.required],
      type:['', Validators.required],
      categorie:['', Validators.required],
      description: this.formBuilder.array(['']),
      quizz: this.formBuilder.array([
        this.formBuilder.group({
          question: ['', Validators.required],
          reponse: ['', Validators.required]
        })
      ]),
    });
  }
  
    // QUIZZ
    getQuizzArray(){
      return this.rappelForm.get('quizz') as FormArray;
    }

  onAddQuizz(){
    let newControl = this.formBuilder.group({
      question: ['', Validators.required],
      reponse: ['', Validators.required]
    });

    this.getQuizzArray().controls.push(newControl);
  }

  onRemoveQuizz(index: number){
    this.getQuizzArray().removeAt(index);
  }

  // DESCRIPTION
  getDescriptionArray() {
    return this.rappelForm.get('description') as FormArray;
  }

  onAddDescription(){
    let newControl = this.formBuilder.control('');
    this.getDescriptionArray().controls.push(newControl);
  }

  onRemoveDescription(index: number){
    this.getDescriptionArray().removeAt(index);
  }

  //SUBMIT
  onSubmitForm(){
    let newRappel = new
    Rappel(this.rappelForm.get('name').value);

    newRappel.type = this.rappelForm.get('type').value;

    for (let control of this.getDescriptionArray().controls){
      newRappel.description.push(control.value);
    }

    for(let control of this.getQuizzArray().controls){
      newRappel.questions.push(control.value.question);
      newRappel.reponses.push(control.value.reponse);
    }

    this.rappelService.addRappel(newRappel);
    this.navCtrl.pop();
  }

  onClickType(){
    console.log("TEST" +  this.rappelForm.get('type').value + "RIEN");
  }

}
