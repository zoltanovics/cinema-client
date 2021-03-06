import { Injectable } from '@angular/core';
import {Room } from './room';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [];

  deleteSuccess : Boolean = false;

  room: Room;

  roomsUrl : string;

  constructor(private http: HttpClient, private router: Router) {
    this.roomsUrl = 'http://localhost:8080/rooms'; 
  }

  public findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }

  getRooms() {
    return this.rooms;
  }

  deleteRoom(room : Room) {
    this.http.delete(this.roomsUrl + "/" + room.id).subscribe(result => {
      window.location.reload();
    } );
  }

  addRoom(room : Room) {
    this.http.post(this.roomsUrl, room).subscribe();
  }

  updateRoom(room: Room) {
    this.http.put(this.roomsUrl+"/"+room.id, room).subscribe();
  } 
  
  getRoom(id) {
    return this.http.get<Room>(this.roomsUrl+"/"+id);
  }
}
