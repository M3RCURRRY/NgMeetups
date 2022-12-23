import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { IRole, IUserData } from 'src/app/types';

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

  currentRoles: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  isEditorToggled: boolean = false;
  isFailed: boolean = false;

  ngOnInit(): void {
    this.currentRoles.next(this.data.roles.map(r => {
      return r.name;
    }))
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
