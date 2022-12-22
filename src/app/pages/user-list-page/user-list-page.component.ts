import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserData } from 'src/app/types';
import { authEnviroment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})

export class UserListPageComponent implements OnInit {

  userData!: IUserData[];

  constructor (private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users.subscribe(data => this.userData = data);
  }
}
