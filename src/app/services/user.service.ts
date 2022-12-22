import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { authEnviroment } from 'src/enviroment/enviroment';
import { IUserData, MutableUserData } from '../types';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userlist: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);

  constructor(private http: HttpClient) { }

  private fetch() {
    this.http.get<IUserData[]>(`${authEnviroment.backendOrigin}/user`)
    .subscribe(data => this.userlist.next(data));
  }

  get users() {
    this.fetch();

    return this.userlist;
  }

  deleteUser(id: number) {
    this.http.delete(`${authEnviroment.backendOrigin}/user/${id}`)
    .subscribe();

    this.fetch();
  }

  updateUser(id: number, newData: MutableUserData) {
    this.http.put(`${authEnviroment.backendOrigin}/user/${id}`, {
      ...newData
    }).subscribe();

    this.fetch();
  }
}
