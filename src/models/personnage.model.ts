import RandomHelper from '../helpers/random.helper.js';
import type { IPersonnage } from '../interfaces/personnage.js';

export abstract class Personnage implements IPersonnage {
  
  private _nom : string;
  private _pdv : number;

  constructor(nom : string) {
    this._nom = nom;
    this._pdv = 20;
  }

  get nom(): string {
    return this._nom;
  }
  set nom(value: string) {
    this._nom = value;
  }
  get pdv(): number {
    return this._pdv;
  }
  private set pdv(value: number) {
    this._pdv = value;
  }

  attaquer(cible: IPersonnage): void {
    const dmg = RandomHelper.generateDegat();
    cible.subirDegat(dmg);
  }

  subirDegat(dmg : number) {
    this.pdv = this.pdv - dmg;
  }

  protected seSoigner(dmg: number) {
    this.pdv = Math.min(this.pdv + dmg, 20);
  }

}