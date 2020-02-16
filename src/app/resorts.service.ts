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
  }

  public getResorts(): Observable<IResort[]> {
    return of(Object.assign([], this.resorts));
  }

  public getCurrentResort(): IResort {
    return Object.assign({}, this.currentResort);
  }

  public setCurrentResort(currentResort: IResort) {
    this.currentResort = Object.assign({}, currentResort);
  }

}
