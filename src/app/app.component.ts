import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-project';
  private number: number = 1234
  secondValue: number = 111
  get counter() {
    return this.number;
  }

  set counter(value: number) {
    this.number = value;
  }

  increment() {
    console.log('increment');
    this.counter--;
    this.secondValue--;
  }
  decrement() {
    console.log('decrement');
    this.counter++;
    this.secondValue++;
  }
}

