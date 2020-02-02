import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Resort } from '../resort.model';
import { ResortType } from '../resort-type.enum';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css'],
})
export class ResortListComponent implements OnInit {

  public resorts: Resort[];
  resortDetail: Resort;
  @Output() public chosenResortOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resorts = [
      {
        img: 'assets/images/1.jpg',
        address: 'Sed perspiciatis',
        phone: 333222111,
        weather: {
          title: 'Et harum quidem',
          icon: 'assets/images/cloudy.png',
          water: 26,
          temperature: 27,
        },
        socialInfo: {
          title: 'Nam libero voluptatem',
          img: 'assets/images/b1.jpg',
          followers: 2850,
          following: 675,
        },
        type: ResortType.HOTEL,
      },
      {
        img: 'assets/images/2.jpg',
        address: 'Sed perspiciatis2',
        phone: 555666777,
        weather: {
          title: 'Et harum quidem2',
          icon: 'assets/images/cloudy.png',
          water: 10,
          temperature: 16,
        },
        socialInfo: {
          title: 'Nam libero voluptatem2',
          img: 'assets/images/b2.jpg',
          followers: 3283,
          following: 3459,
        },
        type: ResortType.SPA,
      },
    ];
    this.resortDetail = this.resorts[0];
    this.chosenResortOut.emit(this.resorts[0]);
  }

  chooseResort(resortEl: Resort) {
    this.resortDetail = resortEl;
    this.chosenResortOut.emit(resortEl);
  }
}
