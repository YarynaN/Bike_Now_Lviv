import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isLogged = this.authService.isLogged;
    isLogged.subscribe(logged => {
      if (!logged) {
        this.router.navigate(['/login']);
      }
    });
    return isLogged;
  }
}
