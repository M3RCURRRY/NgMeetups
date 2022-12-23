import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { IUserData, MutableUserData } from 'src/app/types';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Input()
  data?: IUserData;
  @Output()
  submitEmmiter = new EventEmitter();
  @Output()
  hideForm = new EventEmitter();

  constructor(private userService: UserService, private fb: FormBuilder) {}

  isFailed: boolean = false;
  userForm!: FormGroup<{
    email: FormControl<string | null>,
    password: FormControl<string | null>,
    fio: FormControl<string | null>
  }>;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      email: [this.data?.email || '', [Validators.required]],
      password: ['', [Validators.required]],
      fio: [this.data?.fio || '', [Validators.required]]
    })
  }

  submitHandler() {
    if (this.userForm.invalid) {
      console.log('invalid');
      return;
    }

    const submitData: MutableUserData = {
      email: this.userForm.value.email as string,
      password: this.userForm.value.password as string,
      fio: this.userForm.value.fio as string
    }

    if (!this.data) {
      this.submitEmmiter.emit(submitData);
      this.hideForm.emit();
      return;
    }

    this.userService.updateUser(this.data?.id as number, submitData)
  }
}
