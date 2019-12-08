import { Component, OnInit } from '@angular/core';
import { Coupon } from "../coupon";
import { CouponService } from "../coupon.service";

@Component({
  selector: 'coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {

  coupons: Coupon[] = [];

  constructor(
    private couponService: CouponService
  ) { 
    this.coupons = couponService.getCoupons();
  }

  selectedCoupon: Coupon;


  onSelectCoupon(coupon) {
    this.selectedCoupon = coupon;
  }

  onFormSubmit(coupon: Coupon) {
    this.selectedCoupon.name = coupon.name;
    this.selectedCoupon.description = coupon.description;
    if (coupon.id > 0) {
      
    } else {
      this.selectedCoupon.id = this.coupons.length+1;
      this.coupons.push(this.selectedCoupon);
    }
    this.selectedCoupon = null;
  }
  
  ngOnInit() {
  }

  onNewClick() {
    this.selectedCoupon = new Coupon();
  }

}
