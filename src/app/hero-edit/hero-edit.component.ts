import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Hero, HeroClass } from '../shared/hero';

import { HeroService } from '../services/hero2.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

    hero: Hero = null;

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() : void { 
      this.route.params.forEach((params: Params) => {
          let id = +params['id'];
          if (id) {
            this.heroService.getHero(id)
              .subscribe(hero => {
                this.hero = hero;
              });
          }
      });

  }

}
