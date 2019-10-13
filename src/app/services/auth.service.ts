import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {
  }

  public get isLogged(): Observable<boolean> {
    return new Observable(observer => {
      firebase.auth().onAuthStateChanged((user: firebase.User) => {
          observer.next(!!user);
      });
    });
  }
  public get currentUser(): any {
    return firebase.auth().currentUser;
  }

  doRegister(email: string, password: string) {
    this.doLogout();
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  doSignIn(email: string, password: string) {
    this.doLogout();
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  public doLogout() {
    firebase.auth().signOut();
  }
}
