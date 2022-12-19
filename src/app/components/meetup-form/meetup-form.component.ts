import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss']
})
export class MeetupFormComponent implements OnInit {

  meetupForm!: FormGroup<{
    name: FormControl<string | null>;
    date: FormControl<string | null>;
    time: FormControl<string | null>;
    location: FormControl<string | null>;
    short_description: FormControl<string | null>;
    long_description: FormControl<string | null>;
    target_audience: FormControl<string | null>;
    need_to_know: FormControl<string | null>;
    will_happen: FormControl<string | null>;
    reason_to_come: FormControl<string | null>;
  }>;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.meetupForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      location: ['', [Validators.required]],
      short_description: ['', [Validators.required]],
      long_description: ['', [Validators.required]],
      target_audience: ['', [Validators.required]],
      need_to_know: ['', [Validators.required]],
      will_happen: ['', [Validators.required]],
      reason_to_come: ['', [Validators.required]]
    })
  }
}
