import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Coupon } from '../coupon';

@Component({
  selector: 'coupon-form',
  templateUrl: './coupon-form.component.html',
  styleUrls: ['./coupon-form.component.css']
})
export class CouponFormComponent implements OnInit {

  model: Coupon;
  @Output() onSubmit = new EventEmitter<Coupon>();
  @Input() coupon: Coupon;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.coupon);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
