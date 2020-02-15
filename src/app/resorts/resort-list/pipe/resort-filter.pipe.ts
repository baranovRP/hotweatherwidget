import { Pipe, PipeTransform } from '@angular/core';
import { IResort } from '../../resort.model';

@Pipe({
  name: 'resortFilter',
})
export class ResortFilterPipe implements PipeTransform {

  transform(resorts: IResort[], resortType: string): IResort[] {
    if (!resortType) {
      return resorts;
    }
    return resorts.filter((resort: IResort) => {
      return `${resort.type}`.toUpperCase().includes(resortType.toUpperCase());
    });
  }

}
