import { Injectable } from '@angular/core';

import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

import { Observable } from 'rxjs';
//import '../shared/rxjs-extensions';


 declare var _:any;

@Injectable()
export class HeroService {

   static HEROES: Hero[] = null;


   constructor() {          
            if (!HeroService.HEROES) {
                   this.loadHeroes();
            } /*else {
               HeroService.HEROES = HEROES;
            } */

   }


    getHeroes(page: number = 1, pageSize: number = 10): Observable<Hero[]> {
        let start: number = (page - 1) * pageSize;

        return  Observable.of( HeroService.HEROES.slice(start, start + pageSize));
    }

    getHero(id: number) : Observable<Hero> {
           let ret: Hero; 

           ret =  HeroService.HEROES.find(hero => {
               return hero.id === id;
           })


           return  Observable.of(ret);
    }

    
    getHero2(id: number) : Observable<Hero> {
           let ret: Hero; 

            HeroService.HEROES.forEach(hero => {
               if (hero.id === id) {
                   ret = hero;
               }

           })


           return Observable.of(ret);
    }


    getDefault() : Hero {
        return  HeroService.HEROES[3];
    }

    persistHeroes() {
        localStorage.setItem('HEROES', JSON.stringify(HeroService.HEROES));
    }
    loadHeroes() {
            if (localStorage.getItem("HEROES")) {
                   HeroService.HEROES = JSON.parse(localStorage.getItem("HEROES"));
            } else {
                HeroService.HEROES = HEROES;
            }
    }



}
