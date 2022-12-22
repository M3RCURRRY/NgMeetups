import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { IUserData } from 'src/app/types';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private userSerive: UserService
  ) {}

  userForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    fio: FormControl<string | null>;
  }>;

  @Input()
  data!: IUserData;

  isEditorToggled: boolean = false;
  isFailed: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      fio: ['', [Validators.required]],
    });
  }

  toggleEditor() {
    if (this.data.id === this.authService.userData.id) {
      this.isFailed = true;
      setTimeout(() => {
        this.isFailed = false;
      }, 3000);
      return;
    }

    this.isEditorToggled = !this.isEditorToggled;
  }

  editUserHandler() {
    if (this.userForm.invalid) {
      return;
    }

    this.userSerive.updateUser(this.data.id, {
      email: this.userForm.value.email as string,
      password: this.userForm.value.password as string,
      fio: this.userForm.value.fio as string,
    });
    this.isEditorToggled = false;
  }

  deleteUserHandler() {
    if (this.data.id === this.authService.userData.id) {
      this.isFailed = true;
      setTimeout(() => {
        this.isFailed = false;
      }, 3000);
      return;
    }

    this.userSerive.deleteUser(this.data.id);
  }
}
