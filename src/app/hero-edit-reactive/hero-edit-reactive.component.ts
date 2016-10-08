import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Hero, HeroClass } from '../shared/hero';
import { CustomValidators } from "../shared/validators";

@Component({
  selector: 'hero-edit-reactive',
  templateUrl: './hero-edit-reactive.component.html',
  styleUrls: ['./hero-edit-reactive.component.css']
})
export class HeroEditReactiveComponent implements OnInit {


  @Input()
  hero: Hero = null;
    heroForm: FormGroup;

     heroClasses = HeroClass;
      heroKeys = null;

  constructor(private fb: FormBuilder) { 
 this.heroKeys = Object.keys(this.heroClasses).filter(Number);

        this.heroForm = this.fb.group({
            id:  '',
            name:         ['', [Validators.minLength(2), Validators.required ]],
            imagePath:    ['', [Validators.required]], 
            heroClass:    ['', [Validators.required]],
            strength:     ['', [Validators.required, CustomValidators.attributeValidator]],
            dexterity:    ['', [Validators.required, CustomValidators.attributeValidator]],
            constitution: ['', [Validators.required, CustomValidators.attributeValidator]],
            intelligence: ['', [Validators.required, CustomValidators.attributeValidator]],
            magicAttack:  ['', [Validators.required, CustomValidators.attributeValidator]],
            magicDefense: ['', [Validators.required, CustomValidators.attributeValidator]],
            meleeAttack:  ['', [Validators.required, CustomValidators.attributeValidator]],
            meleeDefense: ['', [Validators.required, CustomValidators.attributeValidator]],
            rangedAttack: ['', [Validators.required, CustomValidators.attributeValidator]]
        });

  }

  ngOnInit() {
     if (this.hero)
      this.heroForm.setValue(this.hero);

  }


}