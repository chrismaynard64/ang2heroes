import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Hero} from '../shared/hero';
import { HeroService } from '../services/hero2.service';

@Component({
  selector: 'bjk-hero-full-detail',
  templateUrl: '../hero-full-detail.component/hero-full-detail.component.html'

}) 
export class HeroFullDetailComponent implements OnInit  {    

  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {

  }

  ngOnInit() : void {
      this.hero = this.heroService.getDefault();

      this.route.params.forEach((params: Params) => {
          let id = +params['id'];
          this.heroService.getHero(id)
            .subscribe(hero => {
              this.hero = hero;
            });
      });
  }

  back() : void  {
      window.history.back();
  }


}