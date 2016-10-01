import { Component } from '@angular/core';

@Component({
  selector: 'bjk-app',
  template: `
    <h1>{{title}}</h1>
      <a routerLink="/"  routerLinkActive="active">Home</a> | <a routerLink="/heroes"  routerLinkActive="active">Heroes</a>
   <router-outlet></router-outlet>
 
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
