import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authStatus!: boolean;
  adminStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthed.subscribe(value => {
      this.authStatus = value;
    });

    this.authService.isAdmin.subscribe(value => {
      this.adminStatus = value;
    })
  }

  logoutHandler() {
    this.authService.logout();
  }

  signInHandler() {
    this.router.navigate(['']);
  }

  settingsHandler() {
    console.log("Not done yet!");
  }

  travelHandler(route: string) {
    this.router.navigate([route]);
  }
}
