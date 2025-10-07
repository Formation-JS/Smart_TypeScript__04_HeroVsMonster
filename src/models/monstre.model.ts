import type { IMonstre } from '../interfaces/monstre.js';
import { Personnage } from './personnage.model.js';


export abstract class Monstre extends Personnage implements IMonstre {

  abstract estEnrager() : boolean;

  constructor(nom : string) {
    super(nom);
  }
}