import {
  AfterContentChecked,
  Component,
  OnInit,
} from '@angular/core';
import { Weather } from './weather.model';
import { ResortsService } from '../../resorts.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit, AfterContentChecked {

  public weather: Weather;

  constructor(private readonly resortsService: ResortsService) { }

  ngOnInit() {
    this.weather = this.resortsService.getCurrentResort().weather;
  }

  ngAfterContentChecked(): void {
    this.weather = this.resortsService.getCurrentResort().weather;
  }

}
