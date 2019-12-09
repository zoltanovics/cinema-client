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
  }

  selectedCoupon: Coupon;


  onSelectCoupon(coupon) {
    this.selectedCoupon = coupon;
  }

  onFormSubmit(coupon: Coupon) {
    this.selectedCoupon.name = coupon.name;
    this.selectedCoupon.description = coupon.description;
    if (coupon.id > 0) {
      this.couponService.updateCoupon(coupon);
    } else {
      this.couponService.addCoupon(this.selectedCoupon);
    }
    this.selectedCoupon = null;
    window.location.reload();
  }
  
  ngOnInit() {
    this.couponService.findAll().subscribe(data => {
      this.coupons = data;
    })
  }

  onNewClick() {
    this.selectedCoupon = new Coupon();
  }

  onDeleteClick(coupon : Coupon) {
    this.coupons.splice(this.coupons.indexOf(coupon),1);
    this.couponService.deleteCoupon(coupon);
  }

}
