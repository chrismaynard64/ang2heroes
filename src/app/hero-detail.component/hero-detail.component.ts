import { Component, Input } from '@angular/core';

import { Hero} from '../shared/hero';

@Component({
  selector: 'bjk-hero',
  templateUrl: '../hero-detail.component/hero-detail.component.html'

}) 
export class HeroDetailComponent {    
  @Input()
  hero: Hero;




}