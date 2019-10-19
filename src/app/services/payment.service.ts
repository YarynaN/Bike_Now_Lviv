import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {AuthService} from './auth.service';

@Injectable()
export class PaymentService {
  payments: AngularFireList<any>;
  orders: [];

  private readonly paymentsPath: string = '/orders';

  get uid(): string {
    return this.auth.currentUser.uid;
  }

  constructor(private auth: AuthService, private db: AngularFireDatabase) {
    this.payments = db.list(`${this.paymentsPath}/${this.uid}`);
  }

  processOrder(token: any, amount: number, bikeId: string, from: string, to: string) {
    const payment = { token, amount, bikeId, from, to };
    return this.payments.push({ ...payment });
  }
  
  getOrderList() {
    return this.payments.snapshotChanges();
  }
}
