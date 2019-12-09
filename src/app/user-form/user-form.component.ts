import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Projection } from '../projection';
import { Coupon } from '../coupon';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = null;

  couponName : string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(data => {
      this.user = data;
    });
  }

  onAddCouponClick() {
    this.userService.addCoupon(this.user, this.couponName);
  }

  onDeleteProjectionClick(projection : Projection) {
    this.userService.deleteProjection(this.user,projection);
  }

  onDeleteCouponClick(coupon : Coupon) {
    this.userService.deleteCoupon(this.user,coupon);
  }


}
