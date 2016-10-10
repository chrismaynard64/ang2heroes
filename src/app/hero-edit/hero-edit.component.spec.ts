/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HeroEditComponent } from './hero-edit.component';
import { HeroEditReactiveComponent } from '../hero-edit-reactive/hero-edit-reactive.component';
import { HeroEditTemplateComponent } from '../hero-edit-template.component/hero-edit-template.component';
import { By }              from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA  }    from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Hero, HeroClass } from '../shared/hero';



import { HeroService } from '../services/hero2.service';


let comp:    HeroEditComponent;
let fixture: ComponentFixture<HeroEditComponent>;
let de:      DebugElement;
let el:      HTMLElement;


class ActivatedRouteStub {
  params = [{id: 4}];
}


describe('Component: HeroEditComponent', () => {

beforeEach( async(() => {
  TestBed.configureTestingModule({
      imports: [   FormsModule,    ReactiveFormsModule ],
      declarations: [ HeroEditComponent, HeroEditTemplateComponent, HeroEditReactiveComponent ], // declare the test component
      providers: [ HeroService,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
       ],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

  
}));


  beforeEach(() => {
    
    fixture = TestBed.createComponent(HeroEditComponent);

    
    comp = fixture.componentInstance; // BannerComponent test instance
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;


  comp.hero = new Hero(3, 'Bill', '', 2);
    
       fixture.detectChanges(); // trigger initial data binding
 

  });



  it('should create an instance', () => {
    //let component = new HeroEditComponent();
    expect(comp).toBeTruthy();
  });


  it('should create an a template form', () => {
    //let component = new HeroEditComponent();
    expect(comp).toBeTruthy();

    de = fixture.debugElement.query(By.css('h2'));
    el = de.nativeElement;


     expect(de.nativeElement.textContent).toContain("Template Form");
    

  });

  it('should create a reactive form', () => {

    de = fixture.debugElement.query(By.css('h2.reactive'));
    el = de.nativeElement;


     expect(de.nativeElement.textContent).toContain("Reactive Form");
  });


  it('should accept a hero',async( () => {

    fixture.whenStable().then(() => {

        de = fixture.debugElement.query(By.css('input#name'));
        el = de.nativeElement;
    
        expect(de.nativeElement.value).toContain("Bhaama");
          });
  }));


  it('should accept a hero',async( () => {

    fixture.whenStable().then(() => {

        de = fixture.debugElement.query(By.css('input#name'));
        el = de.nativeElement;
   comp.hero = new Hero(3, 'Bill', '', 2);
     fixture.detectChanges(); // trigger initial data binding
    
        expect(de.nativeElement.value).toContain("Bill");
          });
  }));



});

