import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() myCounter!: number
  @Input() secondValue!: number
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log("changes", changes);
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);
      console.log(`${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`);
    }

  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
}
