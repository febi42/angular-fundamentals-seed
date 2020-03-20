import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{title + '!'}}
      <div>{{numberOne + numberTwo}}</div>
      <div>{{isHappy ? ':)' : ':('}}</div>
    </div>
  `
})
export class AppComponent {
  title: String;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
