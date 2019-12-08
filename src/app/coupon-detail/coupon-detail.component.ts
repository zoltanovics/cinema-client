import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Coupon } from "../coupon";
import { CouponService } from "../coupon.service";

@Component({
  selector: 'coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {

  coupon: Coupon = null;

  constructor(
    private route: ActivatedRoute,
    private couponService: CouponService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.coupon = this.couponService.getCoupon(id);
  }

}
