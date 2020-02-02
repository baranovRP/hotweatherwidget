import { Component } from '@angular/core';
import { Resort } from './resort.model';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent {

  curr: Resort;

  onChosenResort(currR: Resort) {
    this.curr = currR;
  }

  constructor() { }

}
