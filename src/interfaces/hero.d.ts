import type { IPersonnage } from './personnage.js';

export interface IHero extends IPersonnage {

  // Getters
  get or() : number;
  get cuir() : number;
  
  // Méthodes
  reposer() : void;

}