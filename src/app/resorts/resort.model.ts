import { Weather } from './weather/weather.model';
import { SocialInfo } from './social-info/social-info.model';
import { ResortType } from './resort-type.enum';

export interface IResort {

  img: string;
  address: string;
  phone: number;
  weather: Weather;
  socialInfo: SocialInfo;
  type: ResortType;

}
