import type { ILoup } from '../interfaces/loup.js';
import { Monstre } from './monstre.model.js';


export class Loup extends Monstre implements ILoup {

  get cuir(): number {
    throw new Error('Method not implemented.');
  }

  constructor() {
    super('Loup');
  }

  override estEnrager(): boolean {
    return this.pdv > 15 || this.pdv <= 2;
  }

}