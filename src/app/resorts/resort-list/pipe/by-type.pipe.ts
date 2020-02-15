import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { IResort } from '../../resort.model';
import { ResortType } from '../../resort-type.enum';

@Pipe({
  name: 'byType',
})
export class ByTypePipe implements PipeTransform {

  transform(resorts: IResort[]): ResortType[] | null {
    return resorts.map(resort => resort.type);
  }
}
