import { Component, OnInit } from '@angular/core';

import { Hero} from './shared/hero';
import { HEROES } from './shared/mock-heroes'
import { HeroDetailComponent }  from './hero-detail.component/hero-detail.component';
import { HeroFullDetailComponent }  from './hero-full-detail.component/hero-full-detail.component';
import { HeroEditTemplateComponent } from './hero-edit-template.component/hero-edit-template.component';
import { HeroEditReactiveComponent } from './hero-edit-reactive/hero-edit-reactive.component';
import { HeroService } from './services/hero2.service';

@Component({
  selector: 'bjk-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  heroInEdit: Hero = null;
  totalItems: number = 50;

  constructor(private heroService: HeroService)  {
    //this.heroes = HEROES;
    //this.heroInEdit = this.heroes[0];
  }

 public editHero(hero) {
   this.heroInEdit = hero;
 }

  ngOnInit(): void {
    this.getHeroes(1, 10);
  }


  getHeroes(page: number = 1, pageSize: number = 10): void {
    this.heroService.getHeroes(page, pageSize).subscribe(heroes => {
      this.heroes = heroes;
    });
  }


  saveHero(hero) {
    this.heroInEdit = null;
    this.heroService.persistHeroes();
  }
  saveHeroes() {
    this.heroService.persistHeroes();
  }
 loadHeroes() {
    this.heroService.loadHeroes();
  }

     public pageChanged(event:any):void {
        this.getHeroes(event.page, event.itemsPerPage);
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };  

}
