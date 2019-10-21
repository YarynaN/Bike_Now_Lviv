import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { environment } from '../../../environments/environment';
import {AuthService} from '../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BikeInfoService} from '../../services/bike-info.service';
import {PersonalInfoService} from '../../services/personal-info.service';
import {GreaterThan} from '../../helpers/validation';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  bikeId: string;
  handler: any;
  sub: any;
  amount: number;
  totalAmount: number;
  name: string;

  orderForm: FormGroup = this.formBuilder.group({
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      amount: [{value: '', disabled: true}],
      name: [{value: '', disabled: true}],
    },
    {
      validator: GreaterThan('dateFrom', 'dateTo')
    }
  );

  constructor(private formBuilder: FormBuilder,
              private paymentSvc: PaymentService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private bikeService: BikeInfoService,
              private personalInfoService: PersonalInfoService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      email: this.authService.currentUser.email,
      image: '/assets/payment-logo.png',
      locale: 'auto',
      description: `Bike rental`,
      'panel-label': 'Pay {{amount}}',
      currency: 'UAH',
      'allow-remember-me': false,
      token: token => {
        const {dateFrom, dateTo} = this.orderForm.value;
        const sDateFrom = dateFrom.toISOString();
        const sDateTo = dateFrom.toISOString();

        this.paymentSvc.processOrder(token, this.totalAmount, this.bikeId, sDateFrom, sDateTo);
        this.router.navigate(['/']);
        this.snackBar.open('🤑 Payment being processed.', 'ok', {
          duration: 2000,
          panelClass: ['blue-snackbar']
        });
      }
    });

    this.sub = this.route.params.subscribe(params => {
      this.bikeId = params['id'];
      this.bikeService.getBikeById(this.bikeId).subscribe((data: any) => {
        if (data) {
          this.amount = +data.price_rent;
          this.personalInfoService.getUserById(data.userId).subscribe((data: any) => {
            this.name = data.name;
            this.orderForm.setValue({
              dateFrom: '',
              dateTo: '',
              name: this.name,
              amount: this.amount,
            });
          });
        }
      });
    });
  }

  handlePayment() {
    if (this.orderForm.invalid) {
      return;
    }

    const {dateFrom, dateTo} = this.orderForm.value;
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((dateTo - dateFrom) / oneDay));

    this.totalAmount = diffDays * this.amount * 100;

    this.handler.open({
      name: 'Bike NOW',
      excerpt: 'Bike Rental',
      amount: this.totalAmount
    });
  }

  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

  cancelOrder() {
    this.router.navigate(['']);
  }
}
