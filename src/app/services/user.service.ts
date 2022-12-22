import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { authEnviroment } from 'src/enviroment/enviroment';
import { IUserData } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userlist: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);

  constructor(private http: HttpClient) { }

  get users() {
    this.http.get<IUserData[]>(`${authEnviroment.backendOrigin}/user`)
    .subscribe(data => this.userlist.next(data));

    return(this.userlist);
  }
}
