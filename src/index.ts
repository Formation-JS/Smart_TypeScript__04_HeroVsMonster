import type { IBandit } from './interfaces/bandit.js';
import type { IHero } from './interfaces/hero.js';
import type { IMonstre } from './interfaces/monstre.js';
import type { IPersonnage } from './interfaces/personnage.js';
import type { Bandit } from './models/bandit.model.js';
import { Hero } from './models/hero.model.js';
import { Loup } from './models/loup.model.js';
import type { Monstre } from './models/monstre.model.js';


// const donald = new Personnage('Donald Duck');

const della: IHero = new Hero('Della Duck');
const loup1: IPersonnage = new Loup();
const loup2: IMonstre = new Loup();
const loup3: Monstre = new Loup();

della.attaquer(loup1);
loup1.attaquer(della);
loup2.attaquer(loup3);

//! Utilisation du typage avec un objet (A NE PAS REPRODUIRE)
const bandit: IBandit = {
  nom: 'Jacky',
  or: 0,
  pdv: 20,
  attaquer(cible) { cible.subirDegat(20); },
  estEnrager() { return true; },
  subirDegat(dmg) { },
};