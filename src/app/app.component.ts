import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  get userInfo() {
    return { isLogged: this.authService.isLogged }
  }
  title = 'bikeNowLviv';
}
