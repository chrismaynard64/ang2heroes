import { Component, Input } from '@angular/core';

import { Hero, HeroClass} from '../shared/hero';

@Component({
  selector: 'bjk-hero',
  templateUrl: '../hero-detail.component/hero-detail.component.html'

}) 
export class HeroDetailComponent {    
  @Input()
  hero: Hero;

  heroClasses = HeroClass;
  heroKeys = null;


  constructor() {
    this.heroKeys = Object.keys(this.heroClasses).filter(Number);
  }
}