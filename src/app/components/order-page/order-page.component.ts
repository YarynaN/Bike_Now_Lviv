import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  handler: any;

  // Payment and order data
  bikeId = '-LqjBEtSOv_jBP7bsabq';
  amount = 2600;
  dateFrom = '2019-10-01';
  dateTo = '2019-10-11';

  orderForm: FormGroup = this.formBuilder.group({
    dateFrom: ['', Validators.required],
    dateTo: ['', Validators.required],
    amount: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder, private paymentSvc: PaymentService, private authService: AuthService) { }

  ngOnInit() {
    this.orderForm.setValue({
      dateFrom: '',
      dateTo: '',
      amount: '',
    });

    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      email: this.authService.currentUser.email,
      image: '/assets/payment-logo.png',
      locale: 'auto',
      description: `Оренда велосипеда`,
      'panel-label': 'Сплатити {{amount}}',
      currency: 'UAH',
      'allow-remember-me': false,
      token: token => {
        this.paymentSvc.processOrder(token, this.amount, this.bikeId, this.dateFrom, this.dateTo);
      }
    });
  }

  get f() { return this.orderForm.controls; }

  handlePayment() {
    this.handler.open({
      name: 'Bike NOW',
      excerpt: 'Deposit Funds to Account',
      amount: this.amount
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }
}
