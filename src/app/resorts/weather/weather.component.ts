import {
  AfterContentChecked,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit, AfterContentChecked {

  @Input() resortWeather: Weather;

  public weather: Weather;

  constructor() { }

  ngOnInit() {
    this.weather = this.resortWeather;
  }

  ngAfterContentChecked(): void {
    this.weather = this.resortWeather;
  }

}
