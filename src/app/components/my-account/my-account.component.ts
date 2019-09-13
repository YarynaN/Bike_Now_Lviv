import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  

  
  constructor(
    private location: Location,
    private router: Router
  ) { }

  

  ngOnInit() {
  }

  secondaryNav(path) {
    this.router.navigate([{ outlets: {
      sidebar: [path]
    }}]);
  }

}
