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
  ) {}

  get info() {
    return {
      userInfo: this.authService.currentUser
    };
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
