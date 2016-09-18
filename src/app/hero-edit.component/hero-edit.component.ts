import { Component, Input } from '@angular/core';

import { Hero} from '../shared/hero';

@Component({
  selector: 'bjk-hero-edit',
  templateUrl: '../hero-edit.component/hero-edit.component.html'

}) 
export class HeroEditComponent {    
  @Input()
  hero: Hero = {id: 0, name:'', imagePath:''};




}