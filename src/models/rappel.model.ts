export class Rappel {

    name: string;
    isActif: boolean;
    description: string[];
    type: string;
    categorie: string;
    questions: string[];
    reponses: string[];
  
    constructor(name: string) {
      this.name = name;
      this.isActif = true;
      this.description = [];
      this.categorie =  "Divin";
      this.type = "Quizz";
      this.questions = [];
      this.reponses = [];
    }
  }