import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { HeroFullDetailComponent } from './hero-full-detail.component/hero-full-detail.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';


const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'detail/:id',
  component: HeroFullDetailComponent
},
{
  path: 'edit/:id',
  component: HeroEditComponent
},

{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
