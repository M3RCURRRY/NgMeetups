import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-howto-page',
  templateUrl: './howto-page.component.html',
  styleUrls: ['./howto-page.component.scss']
})
export class HowtoPageComponent {
  constructor(private router: Router) { }

  backHandler() {
    this.router.navigate(['']);
  }
}
