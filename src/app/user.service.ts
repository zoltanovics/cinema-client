import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl : string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users'; 
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public getUser(id) {
    return this.http.get<User>(this.usersUrl + "/" + id);
  }

  addCoupon(user : User, couponName : string) {
    this.http.post(this.usersUrl +"/" +user.id + "/addCoupon/"+couponName,"").subscribe(data => {
      window.location.reload();
    });
  }
}
