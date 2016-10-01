import { Injectable } from '@angular/core';

import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';


 declare var _:any;

@Injectable()
export class HeroService {

   

    getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES.slice(0, 10));
    }

    getHero(id: number) : Promise<Hero> {
           let ret: Hero; 

           ret = HEROES.find(hero => {
               return hero.id === id;
           })


           return Promise.resolve(ret);
    }

    
    getHero2(id: number) : Promise<Hero> {
           let ret: Hero; 

           HEROES.forEach(hero => {
               if (hero.id === id) {
                   ret = hero;
               }

           })


           return Promise.resolve(ret);
    }


    getDefault() : Hero {
        return HEROES[3];
    }

}
