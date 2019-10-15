import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.scss']
})
export class LoggedNavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  get userInfo() {
    return {
      userInfo: this.authService.currentUser
    }
  }


  ngOnInit() {
  }

}
