import { Component, Input } from '@angular/core';
import { Resort } from '../../resort.model';

@Component({
  selector: 'app-resort-item',
  templateUrl: './resort-item.component.html',
  styleUrls: ['./resort-item.component.css'],
})
export class ResortItemComponent {

  @Input() currentResort: Resort;

  constructor() {}

}
