import { Pipe, PipeTransform } from '@angular/core';
import { IMeetupData } from 'src/app/types';

@Pipe({
  name: 'filterMine',
  pure: false
})
export class FilterMinePipe implements PipeTransform {

  transform(data: IMeetupData[], filter: string): IMeetupData[] {
    if (!data || !filter) return data;

    return data.filter(value => value.owner?.id === +filter);
  }
}
