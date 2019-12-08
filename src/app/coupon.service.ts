import { Injectable } from '@angular/core';
import {Coupon } from './coupon'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  couponsUrl : string;

  coupons: Coupon[] = []

  constructor(private http: HttpClient) {
    this.couponsUrl = 'http://localhost:8080/coupons'; 
  }

  public findAll(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(this.couponsUrl);
  }

  getCoupons() {
    return this.coupons;
  }
  
  getCoupon(id) {
    return this.http.get<Coupon>(this.couponsUrl + "/" + id);
  }

  addCoupon(coupon: Coupon) {
    console.log(coupon);
    this.http.post(this.couponsUrl, coupon).subscribe();
  }

  updateCoupon(coupon : Coupon) {
    this.http.put(this.couponsUrl + "/" + coupon.id, coupon).subscribe();
  }

}
