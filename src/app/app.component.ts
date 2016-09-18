import { Component } from '@angular/core';

@Component({
  selector: 'bjk-app',
  template: `
    <h1>{{title}}</h1>
      <a routerLink="/">Home</a>  <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
 
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
