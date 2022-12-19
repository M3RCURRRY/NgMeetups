import { Component, OnInit } from '@angular/core';
import { MeetupsService } from 'src/app/services/meetups.service';
import { IMeetupData } from 'src/app/types';

@Component({
  selector: 'app-allmeet-page',
  templateUrl: './allmeet-page.component.html',
  styleUrls: ['./allmeet-page.component.scss']
})
export class AllmeetPageComponent implements OnInit {

  allMeetups!: IMeetupData[];

  constructor(private meetService: MeetupsService) { }

  ngOnInit(): void {
    this.meetService.meetups.subscribe(value => {
      this.allMeetups = value;
    })
  }
}
