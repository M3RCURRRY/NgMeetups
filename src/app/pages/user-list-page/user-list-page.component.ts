import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserData } from 'src/app/types';
import { authEnviroment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})

export class UserListPageComponent implements OnInit {

  userData: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);

  constructor (private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IUserData[]>(`${authEnviroment.backendOrigin}/user`)
    .subscribe(data => this.userData.next(data));
  }
}
