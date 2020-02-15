import { Injectable } from '@angular/core';
import { IResort } from './resorts/resort.model';
import { Observable, of } from 'rxjs';
import { resorts } from './mock';

@Injectable()
export class ResortsService {

  public resorts: IResort[] = resorts;
  public currentResort: IResort;

  constructor() {
    this.currentResort = resorts[0];
    console.warn(this.currentResort);
  }

  public getResorts(): Observable<IResort[]> {
    return of(Object.assign([], this.resorts));
  }
}
