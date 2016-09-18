import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component/hero-detail.component';
import { HeroEditComponent } from './hero-edit.component/hero-edit.component';
import { DashboardComponent }      from './dashboard/dashboard.component';

import { HeroService } from './services/hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroEditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     routing
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
