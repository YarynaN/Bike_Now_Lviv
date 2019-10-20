<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import * as firebase from 'firebase';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-logged-navbar',
  templateUrl: './logged-navbar.component.html',
  styleUrls: ['./logged-navbar.component.scss']
})
export class LoggedNavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
  }

  get info() {
    return {
      userInfo: this.authService.currentUser
    };
  }

  ngOnInit() {
  }

  tryLogout() {
    this.authService.doLogout().then(() => {
      this.router.navigate(['/']);
    });
  }
}
