import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private authService: AuthService) { }
  get userInfo(){
    return {
      isLogged: this.authService.isLogged,
      userInfo: this.authService.currentUser
    };
  }

  ngOnInit() {
  }

}
