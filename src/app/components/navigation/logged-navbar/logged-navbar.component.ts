import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from "@angular/router";
import { PersonalInfoService } from 'src/app/services/personal-info.service';
import { PersonalInfo } from 'src/app/models/personal-info.model';

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.scss']
})
export class LoggedNavbarComponent implements OnInit {
  personalInfo: PersonalInfo;

  constructor(
    private authService: AuthService,
    private router: Router,
    private personalInfoService: PersonalInfoService
  ) { }

  get info() {
    if (this.authService.currentUser) {
      return {
        userInfo: this.authService.currentUser
      };
    }
  }
  get getEmail() {
    if (this.authService.currentUser && this.authService.currentUser.email) {
      return this.authService.currentUser.email
    }
  }
  get photo() {
    if (this.personalInfo && this.personalInfo.photo) {
      return this.personalInfo.photo;
    } else {
      return 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
    }
  }

  ngOnInit() {
    this.personalInfoService.getUserItem().subscribe((data: any) => {
      if (data) {
        this.personalInfo = data;
      }
    });
  }

  tryLogout() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
