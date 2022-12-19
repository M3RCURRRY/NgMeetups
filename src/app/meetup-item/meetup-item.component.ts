import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MeetupsService } from '../services/meetups.service';
import { IMeetupData } from '../types';

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
    private meetupService: MeetupsService
  ) {}

  ngOnInit(): void {
    let flag = false;
    for (let participants of this.data.users) {
      if (participants.id === this.authService.userData.id) {
        flag = true;
        // this.isSubscribed = true;
        break;
      }
    }

    this.isSubscribed = flag;
  }

  subscribeHandler() {
    if (!this.isSubscribed) {
      this.meetupService.subscribeToMeetup(
        this.data.id,
        this.authService.userData.id
      );
    } else {
      this.meetupService.unsubscribeFromMeetup(
        this.data.id,
        this.authService.userData.id
      );
    }
  }

  expandHandler() {
    this.isExpanded = !this.isExpanded;
  }
}
