import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MeetupsService } from 'src/app/services/meetups.service';
import { IMeetupData } from 'src/app/types';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss'],
})
export class MeetupFormComponent implements OnInit, OnDestroy {
  meetupForm!: FormGroup<{
    name: FormControl<string | null>;
    date: FormControl<string | null>;
    time: FormControl<string | null>;
    duration: FormControl<number | null>;
    location: FormControl<string | null>;
    description: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;

  meetupData?: IMeetupData | null;
  isFailed: boolean = false;

  @Input()
  formName!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private meetupService: MeetupsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.meetupService.getCurrentMeetup()) {
      this.meetupService.clearCurrrentMeetup();
    }
  }

  initForm() {
    this.meetupData = this.meetupService.getCurrentMeetup();

    this.meetupForm = this.fb.group({
      name: [this.meetupData?.name || '', [Validators.required]],
      date: [this.meetupData?.time || '', [Validators.required]],
      time: [this.meetupData?.time || '', [Validators.required]],
      duration: [this.meetupData?.duration || 0, [Validators.required]],
      location: [this.meetupData?.location || '', [Validators.required]],
      description: [this.meetupData?.description || '', [Validators.required]],
      target_audience: [this.meetupData?.target_audience || '', [Validators.required]],
      need_to_know: [this.meetupData?.need_to_know || '', [Validators.required]],
      will_happen: [this.meetupData?.will_happen || '', [Validators.required]],
      reason_to_come: [this.meetupData?.reason_to_come || '', [Validators.required]],
    });
  }

  deleteHandler() {
    this.meetupService.removeMeetup(this.meetupData?.id as number);
  }

  cancelHandler() {
    this.router.navigate(['my-meetups']);
  }

  constructData(): IMeetupData {
    const time = new Date(`${this.meetupForm.value.date} ${this.meetupForm.value.time} UTC`);
    const fd = this.meetupForm.value;

    const data: IMeetupData = {
      name: fd.name as string,
      description: fd.description as string,
      time: time.toISOString(),
      duration: Number(fd.duration) as number,
      location: fd.location as string,
      target_audience: fd.target_audience as string,
      need_to_know: fd.need_to_know as string,
      will_happen: fd.will_happen as string,
      reason_to_come: fd.reason_to_come as string
    }

    return data;
  }

  submitHandler() {
    if (this.meetupForm.invalid) {
      this.isFailed = true;
      setTimeout(() => {
        this.isFailed = false;
      }, 3500);
      return;
    }

    const v = this.constructData();

    if (this.meetupData) {
      this.meetupService.editMeetup(this.meetupData.id as number, v);
    }
    else {
      this.meetupService.createMeetup(v);
    }

    this.router.navigate(['all-meetups']);
  }
}
