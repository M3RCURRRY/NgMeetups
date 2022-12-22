import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { authEnviroment } from 'src/enviroment/enviroment';
import { IMeetupData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService implements OnDestroy {
  private mList: BehaviorSubject<IMeetupData[]> = new BehaviorSubject<
    IMeetupData[]
  >([]);

  private currentMeetup: BehaviorSubject<IMeetupData | null> =
    new BehaviorSubject<IMeetupData | null>(null);

  private meetupsUpdater = setInterval(() => {
    if (!localStorage.getItem('auth-token')) return;

    this.http
      .get<IMeetupData[]>(`${authEnviroment.backendOrigin}/meetup`)
      .subscribe((value) => this.mList.next(value));
  }, 5000);

  constructor(private http: HttpClient) {}

  get meetups(): Observable<IMeetupData[]> {
    this.http
      .get<IMeetupData[]>(`${authEnviroment.backendOrigin}/meetup`)
      .subscribe((value) => this.mList.next(value));

    return this.mList;
  }

  subscribeToMeetup(idMeetup: number, idUser: number) {
    this.http
      .put<IMeetupData>(`${authEnviroment.backendOrigin}/meetup`, {
        idMeetup,
        idUser,
      })
      .subscribe((value) => {
        const index = this.mList.value.findIndex((x) => x.id === idMeetup);
        let listCopy = this.mList.value;
        listCopy[index] = value;
        this.mList.next(listCopy);
      });
  }

  unsubscribeFromMeetup(idMeetup: number, idUser: number) {
    this.http
      .delete<IMeetupData>(`${authEnviroment.backendOrigin}/meetup`, {
        body: { idMeetup, idUser },
      })
      .subscribe((value) => {
        const index = this.mList.value.findIndex((x) => x.id === idMeetup);
        let listCopy = this.mList.value;
        listCopy[index] = value;
        this.mList.next(listCopy);
      });
  }

  createMeetup(meetup: IMeetupData) {
    this.http.post(`${authEnviroment.backendOrigin}/meetup`, {
      ...meetup,
    }).subscribe();
  }

  editMeetup(id: number, meetup: IMeetupData) {
    this.http.put(`${authEnviroment.backendOrigin}/meetup/${id}`, {
      ...meetup
    }).subscribe();
    this.clearCurrrentMeetup();
  }

  removeMeetup(id: number) {
    this.http
      .delete(`${authEnviroment.backendOrigin}/meetup/${id}`, {
        body: { id },
      })
      .subscribe((value) => {
        const index = this.mList.value.findIndex((x) => x.id === id);
        let listCopy = this.mList.value;
        listCopy = [...listCopy.slice(0, index), ...listCopy.slice(index + 1)];
        this.mList.next(listCopy);
      });
  }

  setCurrentMeetup(meetup: IMeetupData) {
    this.currentMeetup.next(meetup);
  }

  getCurrentMeetup() {
    return this.currentMeetup.value;
  }

  clearCurrrentMeetup() {
    this.currentMeetup.next(null);
  }

  ngOnDestroy(): void {
    clearInterval(this.meetupsUpdater);
  }
}
