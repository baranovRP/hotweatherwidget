import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IResort } from '../resort.model';
import { ResortType } from '../resort-type.enum';
import { Observable } from 'rxjs';
import { resorts$ } from '../../mock';

@Component({
  selector: 'app-resort-list',
  templateUrl: './resort-list.component.html',
  styleUrls: ['./resort-list.component.css'],
})
export class ResortListComponent implements OnInit {

  public filterResortType: ResortType;
  public resorts$: Observable<IResort[]> = resorts$;
  public resortDetail: IResort;
  @Output() public chosenResortOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.resorts$.subscribe((resorts: IResort[]) => {
      this.resortDetail = resorts[0];
      this.chosenResortOut.emit(resorts[0]);
    });
  }

  chooseResort(resortEl: IResort) {
    this.resortDetail = resortEl;
    this.chosenResortOut.emit(resortEl);
  }

  filterResorts(event: MouseEvent) {
    // @ts-ignore
    this.filterResortType = event.target.text;
  }
}
