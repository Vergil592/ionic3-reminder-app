import { Rappel } from '../models/rappel'

export class RappelsService {

   rappelList: Rappel[] = [
        {
          name: "Rappel 1",
          isActif: false,
          description: ["blabldab", "La marche des vertueux"],
          type:"QCM",
          questions: ["Q1", "Q2"],
          reponses: ["R1", "R2"],
        },
        {
          name: "Rappel 2",
          isActif:false,
          description: ["C'est pas faux", "..."],
          type:"Questions ouvertes",
          questions: ["Q1", "Q2"],
          reponses: ["R1", "R2"],
        }, 
        {
          name: "Rappel 3",
          isActif: true,
          description: ["Le gras c'est la vie", "Et tu pousses à en CREVEY !!!"],
          type:"QCM",
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
}