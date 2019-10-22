import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';
import { BikeInfoService } from '../../../services/bike-info.service';
import { PersonalInfoService } from '../../../services/personal-info.service';
import { BikeInfo } from '../../../models/bike-info.model';
import { brands } from '../bikes-info/bike/constantsBikeInfo';
import { sizes } from '../bikes-info/bike/constantsBikeInfo';
import { diameterWheels } from '../bikes-info/bike/constantsBikeInfo';
import { PersonalInfo } from '../../../models/personal-info.model';
import { flatten } from 'lodash';

import * as moment from 'moment';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: any[] = [];
  displayedColumns: string[] = ['position', 'bikeId', 'id', 'to', 'amount'];

  constructor(
    private paymentService: PaymentService,
    private bikeInfoService: BikeInfoService,
    private personalInfoService: PersonalInfoService
  ) { }

  private getOrders(data) {
    return data.map(o => ({ id: o.payload.key, ...o.payload.val() }))
      .map(order => {
        order['type'] = 'order';
        this.bikeInfoService.getBikeById(order.bikeId).subscribe((bike: BikeInfo) => {
          order['bike'] = {...bike, image: bike.images[0], images: []};

          this.personalInfoService.getUserById(bike.userId).subscribe((user: PersonalInfo) => {
            order['user'] = { ...user, photo: ''};
          })
        });

        return order;
      });
  }

  private getReservations(data) {
    return flatten(data.map(o => ({ id: o.payload.key, ...o.payload.val() }))
      .map((bike: BikeInfo) => {
        let order;

        if (bike.reservations) {
          order = Object.values(bike.reservations);

          if (order.length) {  
            order.map((reservation: any) => {
              reservation['type'] = 'reservation';
              reservation['bike'] = {...bike, image: bike.images[0], images: []};

              this.personalInfoService.getUserById(reservation.orderedBy).subscribe((user: PersonalInfo) => {
                reservation['user'] = { ...user, photo: ''};
              })
            });
          }

          return order;
        }
      }).filter(item => item !== undefined)
    );
  }

  private formatData(arr) {
    arr.forEach(item => {
      item.dateFrom = moment(item.from).format('DD/MM/YYYY');
      item.dateTo = moment(item.to).format('DD/MM/YYYY');
      item.amount /= 100;
    });

    return arr;
  }

  private sortData(arr) {
    arr.sort((a, b) => {
      return (new Date(a.from)).getTime() - (new Date(b.from)).getTime()
    });

    return arr;
  }

  ngOnInit() {
    // For person who booking bicycles
    this.paymentService.getOrderList()
      .subscribe((data: any) => {  
        this.orders = this.sortData([
          ...this.orders,
          ...this.formatData(this.getOrders(data))
        ]);  
      });

      // For person who add bicycles to rent
      this.bikeInfoService.getBikesList()
        .subscribe((data: any) => {
          this.orders = this.sortData([
            ...this.orders, 
            ...this.formatData(this.getReservations(data))
          ]);
        })
  }

  getPropertiesBike(bike: BikeInfo) {
    const brand = brands.find(item => item.value === bike.brand);
    const size = sizes.find(item => item.value === bike.sizes);
    const wheel = diameterWheels.find(item => item.value === bike.diameter_wheels);
    
    return {
      brand: brand ? brand.viewValue : '',
      color: bike.color || '',
      size: size ? size.viewValue : '',
      model: bike.model || '',
      wheel: wheel ? wheel.viewValue : ''
    }
  }

}
