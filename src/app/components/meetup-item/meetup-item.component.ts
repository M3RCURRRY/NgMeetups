import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MeetupsService } from '../../services/meetups.service';
import { IMeetupData, IUserDesc } from '../../types';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss'],
})
export class MeetupItemComponent implements OnInit {
  isExpanded: boolean = false;
  isSubscribed!: boolean;

  @Input()
  data!: IMeetupData;

  @Input()
  isEditButton!: boolean;

  constructor(
    private authService: AuthService,
    private meetupService: MeetupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let flag = false;
    for (let participants of this.data.users as IUserDesc[]) {
      if (participants.id === this.authService.userData.id) {
        flag = true;
        break;
      }
    }

    this.isSubscribed = flag;
  }

  subscribeHandler() {
    if (!this.isSubscribed) {
      this.meetupService.subscribeToMeetup(
        this.data.id as number,
        this.authService.userData.id
      );
    } else {
      this.meetupService.unsubscribeFromMeetup(
        this.data.id as number,
        this.authService.userData.id
      );
    }
  }

  expandHandler() {
    this.isExpanded = !this.isExpanded;
  }

  editMeetupHandler() {
    this.meetupService.setCurrentMeetup(this.data);
    this.router.navigate(['edit-meetup']);
  }
}
