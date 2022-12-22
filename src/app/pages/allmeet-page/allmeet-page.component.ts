import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetupsService } from 'src/app/services/meetups.service';
import { IMeetupData } from 'src/app/types';

@Component({
  selector: 'app-allmeet-page',
  templateUrl: './allmeet-page.component.html',
  styleUrls: ['./allmeet-page.component.scss'],
})
export class AllmeetPageComponent implements OnInit {
  allMeetups!: IMeetupData[];
  
  filterForm!: FormGroup<{
    searchValue: FormControl<string | null>
  }>;
  filter!: string;

  constructor(
    private meetService: MeetupsService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  createMeetupHandler() {
    this.router.navigate(['create-meetup']);
  }

  ngOnInit(): void {
    this.meetService.meetups.subscribe((value) => {
      this.allMeetups = value;
    });

    this.initForm();
    this.filterForm.valueChanges.subscribe((data) => {
      this.filter = data.searchValue ? data.searchValue : ''
    })
  }

  initForm() {
    this.filterForm = this.fb.group({
      searchValue: ['']
    })
  }
}
