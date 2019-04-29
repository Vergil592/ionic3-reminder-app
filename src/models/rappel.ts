export class Rappel {

    name: string;
    isActif: boolean;
    description: string[];
    type: string;
    questions: string[];
    reponses: string[];
  
    constructor(name: string) {
      this.name = name;
      this.isActif = false;
    }
  }