import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <div class="header-wrap">
      <h1>{{title}}</h1>
      <my-top-bar></my-top-bar>
    </div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
