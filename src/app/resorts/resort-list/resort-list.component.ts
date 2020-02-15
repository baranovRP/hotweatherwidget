import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { IResort } from '../resort.model';
import { ResortType } from '../resort-type.enum';
import { Observable } from 'rxjs';
import { resorts$ } from '../../mock';
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
  @Output() public chosenResortOut = new EventEmitter();

  constructor(private readonly resortsService: ResortsService) { }

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
