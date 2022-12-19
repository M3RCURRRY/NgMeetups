import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IMeetupData } from 'src/app/types';

@Pipe({
  name: 'filterMeetups'
})
export class FilterMeetupsPipe implements PipeTransform {

  constructor(private authService: AuthService) { };

  transform(data: IMeetupData[], filter: string): IMeetupData[] {
    if (!data || !filter) return data;

    return data.filter(value => value.owner.id === +filter);
  }

}
