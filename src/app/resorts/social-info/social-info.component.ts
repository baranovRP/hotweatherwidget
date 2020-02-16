import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { SocialInfo } from './social-info.model';
import { ResortsService } from '../../resorts.service';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css'],
})
export class SocialInfoComponent implements OnInit, AfterContentChecked {

  public socialInfo: SocialInfo;

  constructor(private readonly resortsService: ResortsService) { }

  ngOnInit() {
    this.socialInfo = this.resortsService.getCurrentResort().socialInfo;
  }

  ngAfterContentChecked(): void {
    this.socialInfo = this.resortsService.getCurrentResort().socialInfo;
  }

}
