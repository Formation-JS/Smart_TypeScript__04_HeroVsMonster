import type { IBandit } from '../interfaces/bandit.js';
import { Monstre } from './monstre.model.js';

export class Bandit extends Monstre implements IBandit {
  
  get or(): any {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super('Bandit');
  }
  
  override estEnrager(): boolean {
    return this.pdv <= 5;
  }

}