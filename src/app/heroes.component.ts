import { Component, OnInit } from '@angular/core';

import { Hero} from './shared/hero';
import { HEROES } from './shared/mock-heroes'
import { HeroDetailComponent }  from './hero-detail.component/hero-detail.component';
import { HeroEditComponent } from './hero-edit.component/hero-edit.component';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'bjk-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  heroInEdit: Hero = null;

  constructor(private heroService: HeroService)  {
    //this.heroes = HEROES;
    //this.heroInEdit = this.heroes[0];
  }

 public editHero(hero) {
   this.heroInEdit = hero;
 }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


}
