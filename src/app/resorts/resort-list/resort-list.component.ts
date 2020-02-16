import {
  Component,
  OnInit,
} from '@angular/core';
import { IResort } from '../resort.model';
import { ResortType } from '../resort-type.enum';
import { Observable } from 'rxjs';
import { ResortsService } from '../../resorts.service';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css'],
})
export class ResortListComponent implements OnInit {

  public filterResortType: ResortType;
  public resorts$: Observable<IResort[]> = this.resortsService.getResorts();
  public resortDetail: IResort;

  constructor(private readonly resortsService: ResortsService) { }

  ngOnInit() {
    this.resortDetail = this.resortsService.getCurrentResort();
  }

  chooseResort(resortEl: IResort) {
    this.resortsService.setCurrentResort(resortEl);
    this.resortDetail = this.resortsService.getCurrentResort();
  }

  filterResorts(event: MouseEvent) {
    // @ts-ignore
    this.filterResortType = event.target.text;
  }
}
