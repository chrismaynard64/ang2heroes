import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Hero, HeroClass } from '../shared/hero';

@Component({
  selector: 'hero-edit-reactive',
  templateUrl: './hero-edit-reactive.component.html',
  styleUrls: ['./hero-edit-reactive.component.css']
})
export class HeroEditReactiveComponent implements OnInit {


  @Input()
  hero: Hero = null;
    heroForm: FormGroup;

  constructor(fb: FormBuilder) { 


        this.heroForm = fb.group({
            name: [this.hero.name, [
                    Validators.minLength(5) ]
                ]
        });

  }

  ngOnInit() {
  }

}
