import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { IUserData } from 'src/app/types';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {

  constructor(private authService: AuthService) { }

  @Input()
  data!: IUserData;

  isEditorToggled: boolean = false;
  isFailed: boolean = false;

  toggleEditor() {
    this.isEditorToggled = !this.isEditorToggled;
  }

  editUserHandler() {

  }

  deleteUserHandler() {
    if (this.data.id === this.authService.userData.id) {
      this.isFailed = true;
      setTimeout(() => {
        this.isFailed = false;
      }, 3000);
      return;
    }

    
  }
}
