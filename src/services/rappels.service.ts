import { Rappel } from '../models/rappel.model'
import { Subject } from 'rxjs/Subject';

export class RappelsService {

  rappel$ = new Subject<Rappel[]>();

   rappelList: Rappel[] = [
        {
          name: "Rappel 1",
          isActif: false,
          description: ["blabldab", "La marche des vertueux"],
          type:"QCM",
          categorie: "SVT",
          questions: ["Q1", "Q2"],
          reponses: ["R1", "R2"],
        },
        {
          name: "Rappel 2",
          isActif:false,
          description: ["C'est pas faux", "..."],
          type:"Questions ouvertes",
          categorie: "Cat1",
          questions: ["Q1", "Q2"],
          reponses: ["R1", "R2"],
        }, 
        {
          name: "Rappel 3",
          isActif: true,
          description: ["Le gras c'est la vie", "Et tu pousses à en CREVEY !!!"],
          type:"QCM",
          categorie: "SVT",
          questions: ["Q1", "Q2"],
          reponses: ["R1", "R2"],
        }
      ];

      addRappel(rappel: Rappel){
        this.rappelList.push(rappel);
      }

      removeRappel(index: number){
        this.rappelList.splice(index);
      }

      emitRappel(){
        this.rappel$.next(this.rappelList.slice());
      }
}