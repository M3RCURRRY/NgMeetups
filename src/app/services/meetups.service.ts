import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { authEnviroment } from 'src/enviroment/enviroment';
import { IMeetupData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  private baseUrl: string = authEnviroment.backendOrigin;
  private mList: BehaviorSubject<IMeetupData[]> = new BehaviorSubject<
    IMeetupData[]
  >([]);
  // private mList!: Observable<IMeetupData[]>;

  constructor(private http: HttpClient) {}

  get meetups(): Observable<IMeetupData[]> {
    this.http
      .get<IMeetupData[]>(`${authEnviroment.backendOrigin}/meetup`)
      .subscribe((value) => this.mList.next(value));

    return this.mList;
  }

  subscribeToMeetup(idMeetup: number, idUser: number) {
    this.http
      .put<IMeetupData>(`${authEnviroment.backendOrigin}/meetup`, { idMeetup, idUser })
      .subscribe((value) => {
        const index = this.mList.value.findIndex(x => x.id === idMeetup);
        let listCopy = this.mList.value;
        listCopy[index] = value;
        this.mList.next(listCopy);
      });    
  }

  unsubscribeFromMeetup(idMeetup: number, idUser: number) {
    this.http.delete<IMeetupData>(`${authEnviroment.backendOrigin}/meetup`, {
      body: { idMeetup, idUser },
    })
    .subscribe((value) => {
      const index = this.mList.value.findIndex(x => x.id === idMeetup);
      let listCopy = this.mList.value;
      listCopy[index] = value;
      this.mList.next(listCopy);
    });
  }
}
