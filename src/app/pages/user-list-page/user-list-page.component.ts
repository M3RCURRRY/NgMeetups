import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUserData, MutableUserData } from 'src/app/types';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})

export class UserListPageComponent implements OnInit {

  userData: BehaviorSubject<IUserData[]> = new BehaviorSubject<IUserData[]>([]);
  isToggled: boolean = false;

  constructor (private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users.subscribe(data => this.userData.next(data));
  }

  toggleCreateForm() {
    this.isToggled = !this.isToggled;
  }

  submitNewUser(user: MutableUserData) {
    this.userService.createUser(user);
  }
}
