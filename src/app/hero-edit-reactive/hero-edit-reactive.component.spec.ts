/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { HeroEditReactiveComponent } from './hero-edit-reactive.component';

describe('Component: HeroEditReactive', () => {
  it('should create an instance', () => {
    let component = new HeroEditReactiveComponent(new FormBuilder());
    expect(component).toBeTruthy();
  });
});
