export interface IPersonnage {

  // Getters
  get nom() : string;
  get pdv() : number;
  
  // Méthodes
  attaquer(cible: IPersonnage) : void;
  subirDegat(dmg : number) : void;

}