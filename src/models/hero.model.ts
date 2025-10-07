import type { IHero } from '../interfaces/hero.js';
import { Personnage } from './personnage.model.js';

export class Hero extends Personnage implements IHero {

  get or(): number {
    throw new Error('Method not implemented.');
  }
  get cuir(): number {
    throw new Error('Method not implemented.');
  }

  reposer(): void {
    this.seSoigner(5);
  }

}