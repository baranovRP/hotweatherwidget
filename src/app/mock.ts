import { Observable, of } from 'rxjs';

import { IResort } from './resorts/resort.model';
import { ResortType } from './resorts/resort-type.enum';

export const resorts = [
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
    type: ResortType.TOURS,
  },
  {
    img: 'assets/images/1.jpg',
    address: 'Sed perspiciatis2',
    phone: 555666777,
    weather: {
      title: 'Et harum quidem2',
      icon: 'assets/images/cloudy.png',
      water: 99,
      temperature: 277,
    },
    socialInfo: {
      title: 'Nam libero voluptatem2',
      img: 'assets/images/b2.jpg',
      followers: 9999,
      following: 1111,
    },
    type: ResortType.FISHING,
  },
  {
    img: 'assets/images/2.jpg',
    address: 'Sed perspiciatis2',
    phone: 555666777,
    weather: {
      title: 'Et harum quidem2',
      icon: 'assets/images/cloudy.png',
      water: 99,
      temperature: 277,
    },
    socialInfo: {
      title: 'Nam libero voluptatem2',
      img: 'assets/images/b1.jpg',
      followers: 9999,
      following: 1111,
    },
    type: ResortType.WEATHER,
  },
];

export const resorts$: Observable<IResort[]> = of(resorts);
