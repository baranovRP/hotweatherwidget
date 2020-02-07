import { Component } from '@angular/core';
import { Resort } from './resort.model';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent {

  resort: Resort;

  onChosenResort(resort: Resort) {
    this.resort = resort;
  }

  constructor() { }

}
