import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Hero, HeroClass } from '../shared/hero';

import { HeroService } from '../services/hero2.service';

@Component({
  selector: 'bjk-hero-edit-template',
  templateUrl: '../hero-edit-template.component/hero-edit-template.component.html'

}) 
export class HeroEditTemplateComponent implements OnInit {    
      @Input()
      hero: Hero = null;

      heroClasses = HeroClass;
      keys = null;


      constructor(private heroService: HeroService, private route: ActivatedRoute) {
        this.keys = Object.keys(this.heroClasses).filter(Number);
      }


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


    updateHero()  {

    }


      submitted = false;
      onSubmit() { 
        
        this.submitted = true; 
        this.heroService.persistHeroes();  

    }
      // TODO: Remove this when we're done
      get diagnostic() { return JSON.stringify(this.hero); }


}