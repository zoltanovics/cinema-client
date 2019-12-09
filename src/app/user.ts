import { Projection } from './projection';
import { Coupon } from './coupon';

export class User {
    id: number = 0;
    name: string = "";
    password: string ="";
    email: string="";
    tickets: Projection[] = [];
    coupons: Coupon[] = [];
}
