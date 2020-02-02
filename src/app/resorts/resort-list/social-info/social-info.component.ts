import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { SocialInfo } from './social-info.model';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css'],
})
export class SocialInfoComponent implements OnInit, AfterContentChecked {

  @Input() resortSocialInfo: SocialInfo;
  public socialInfo: SocialInfo;

  constructor() {
  }

  ngOnInit() {
    this.socialInfo = this.resortSocialInfo;
  }

  ngAfterContentChecked(): void {
    this.socialInfo = this.resortSocialInfo;
  }

}
