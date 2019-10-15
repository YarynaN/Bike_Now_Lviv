import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-guest-navbar',
  templateUrl: './guest-navbar.component.html',
  styleUrls: ['./guest-navbar.component.scss']
})
export class GuestNavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }
  get userInfo() {
    return {
      isLogged: this.authService.isLogged
    };
  }

  ngOnInit() {
  }

}
