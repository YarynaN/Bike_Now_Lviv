import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  paymentMethod: string;

  orderForm: FormGroup = this.formBuilder.group({
    dateFrom: ['', Validators.required],
    dateTo: ['', Validators.required],
    amount: ['', Validators.required],
    paymentMethod: [''],
    cardNumber: ['', Validators.required],
    expiredDate: ['', Validators.required],
    cvcCode: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm.setValue({
      dateFrom: '',
      dateTo: '',
      amount: '',
      paymentMethod: 'cash',
      cardNumber: '',
      expiredDate: '',
      cvcCode: '',
    });
  }
  
  get f() { return this.orderForm.controls; }

}
