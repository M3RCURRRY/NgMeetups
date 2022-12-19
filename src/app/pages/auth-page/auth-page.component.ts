import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  email!: string;
  password!: string;
  isFailed: boolean = false;

  authForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  authHandler() {
    this.authService
      .login(
        this.authForm.value.email as string,
        this.authForm.value.password as string
      )
      .subscribe(
        res => console.log("Authed"),
        err => {
          this.isFailed = true;
          setTimeout(() => this.isFailed = !this.isFailed, 2000);
        },
        () => this.router.navigate(['howto'])
      );
  }

  howToHandler() {
    this.router.navigate(['howto']);
  }
}
