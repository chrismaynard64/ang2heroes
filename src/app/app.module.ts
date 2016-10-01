import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 import { PaginationModule  } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { HeroFullDetailComponent } from './hero-full-detail.component/hero-full-detail.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { HeroService } from './services/hero2.service';
import { CustomValidators } from './shared/validators';
import { HeroEditReactiveComponent } from './hero-edit-reactive/hero-edit-reactive.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroEditTemplateComponent } from './hero-edit-template.component/hero-edit-template.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroEditTemplateComponent,
    HeroFullDetailComponent,
    DashboardComponent,
    CustomValidators, HeroEditReactiveComponent, HeroEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    PaginationModule,
     routing
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
