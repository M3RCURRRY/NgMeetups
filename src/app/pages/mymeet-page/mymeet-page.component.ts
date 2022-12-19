import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';
import { IMeetupData } from 'src/app/types';

@Component({
  selector: 'app-mymeet-page',
  templateUrl: './mymeet-page.component.html',
  styleUrls: ['./mymeet-page.component.scss']
})
export class MymeetPageComponent implements OnInit {
  allMeetups!: IMeetupData[];
  userId!: string;

  constructor(private meetService: MeetupsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.meetService.meetups.subscribe(value => {
      this.allMeetups = value;
      this.userId = String(this.authService.userData.id);
    })    
  }
}
