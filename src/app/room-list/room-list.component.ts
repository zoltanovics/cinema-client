import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";
import { Router } from '@angular/router';

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];

  constructor(
    private roomService: RoomService,
  ) { 
  }

  selectedRoom: Room;


  onSelectRoom(room) {
    this.selectedRoom = room;
  }

  onFormSubmit(room: Room) {
    this.selectedRoom.name = room.name;
    this.selectedRoom.size = room.size;
    if (room.id > 0) {
      this.roomService.updateRoom(room);
    } else {
      this.roomService.addRoom(this.selectedRoom);
    }
    this.selectedRoom = null;
    window.location.reload();
  }
  
 

  ngOnInit() {
    this.roomService.findAll().subscribe(data => {
      this.rooms = data;
    })
  }

  onNewClick() {
    this.selectedRoom = new Room();
  }

}
