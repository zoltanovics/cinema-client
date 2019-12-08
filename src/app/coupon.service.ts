import { Injectable } from '@angular/core';
import {Coupon } from './coupon'

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  coupons: Coupon[] = [
    {
      id: 1,
      name: 'Diák',
      description: '50% kedvezmény',
    },
    {
      id: 2,
      name: 'Gyerek',
      description: '75% kedvezmény',
    },
  ]

  constructor() { }

  getCoupons() {
    return this.coupons;
  }
  
  getCoupon(id) {
    return this.coupons.find(i => i.id == id);
  }
}
