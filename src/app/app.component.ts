import { Component } from '@angular/core';

import { Hero} from './shared/hero';
import { HEROES } from './shared/mock-heroes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  heroInEdit: Hero = null;

  constructor()  {
    this.heroes = HEROES;
    //this.heroInEdit = this.heroes[0];
  }

 public editHero(hero) {
   this.heroInEdit = hero;
 }

}
