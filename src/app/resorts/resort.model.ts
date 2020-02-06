import { Weather } from './weather/weather.model';
import { SocialInfo } from './social-info/social-info.model';
import { ResortType } from './resort-type.enum';

export class Resort {

  public img: string;
  public address: string;
  public phone: number;
  public weather: Weather;
  public socialInfo: SocialInfo;
  public type: string;

  constructor(
    img: string,
    address: string,
    phone: number,
    weather: Weather,
    socialInfo: SocialInfo,
    type: ResortType,
  ) {
    this.img = img;
    this.address = address;
    this.phone = phone;
    this.weather = weather;
    this.socialInfo = socialInfo;
    this.type = type;
  }
}
