import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:variable-name
  private _isLogged: boolean;

  constructor() {
    this._isLogged = false;
  }

  public get isLogged(): boolean {
    return this._isLogged;
  }

  public get currentUser(): any {
    return firebase.auth().currentUser;
  }

  doRegister(email: string, password: string){
    this.doLogout();
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          this._isLogged = true;
          resolve(res);
        }, err => reject(err));
    });
  }

  doSignIn(email: string, password: string){
    this.doLogout();
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          this._isLogged = true;
          resolve(res);
        }, err => reject(err));
    });
  }

  public doLogout(){
    this._isLogged = false;
    firebase.auth().signOut();
  }
}
