import { Injectable } from '@angular/core';
import {Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: Room[] = [
    {
      id: 1,
      name: '1-es szoba',
      size: 120,
    },
    {
      id: 2,
      name: '2-es szoba',
      size: 150,
    },
    {
      id: 3,
      name: '3-as szoba',
      size: 100,
    },
  ]

  constructor() { }

  getRooms() {
    return this.rooms;
  }

  addRoom(room : Room) {
    this.rooms.push(room);
  }
  
  getRoom(id) {
    return this.rooms.find(i => i.id == id);
  }
}
