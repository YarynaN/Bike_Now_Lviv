import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from './auth.service';


@Injectable()
export class PaymentService {
  payments: AngularFireList<any>;
  private uid: string;

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    this.uid = this.auth.currentUser.uid;
    this.payments = db.list(`/orders/${this.uid}`);
  }

  processOrder(token: any, amount: number, bikeId: string, from: string, to: string) {
    const payment = { token, amount, bikeId, from, to };
    return this.payments.push({ ...payment });
  }
}
