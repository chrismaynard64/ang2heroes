import { Component, OnInit } from '@angular/core';

import { Hero} from '../shared/hero';
import { HeroService } from '../services/hero.service';


@Component({
  selector: 'my-dashboard',
  //  template: '<h3>My Dashboard</h3>'
 templateUrl: '../dashboard/dashboard.component.html'
})
export class DashboardComponent   implements OnInit { 
 heroes: Hero[];
 topHeroes: Hero[];

 constructor(private heroService: HeroService) {
       this.topHeroes = new Array<Hero>();
 }

  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void {

    this.heroService.getHeroes().then(heroes => {
        this.heroes = heroes;
     

        let siz: number  = this.heroes.length;
        let total: number = 0;
        do  {
            let idx = Math.floor(Math.random() * siz);
            let found = false;

            this.topHeroes.forEach(ele => {
                if (ele === this.heroes[idx]) {
                    found = true;
                } 
            });

            if (!found) {
                this.topHeroes.push(this.heroes[idx]);
                total++;
            }

        } while (total < 5);
        
           
    });
  }


}
