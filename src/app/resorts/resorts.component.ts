import { Component } from '@angular/core';
import { IResort } from './resort.model';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent {

  resort: IResort;

  onChosenResort(resort: IResort) {
    this.resort = resort;
  }

  constructor() { }

}
