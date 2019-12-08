import { Component, OnInit } from '@angular/core';
import { Room } from "../room";
import { RoomService } from "../room.service";

@Component({
  selector: 'room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];

  constructor(
    private roomService: RoomService
  ) { 
    this.rooms = roomService.getRooms();
  }

  selectedRoom: Room;


  onSelectRoom(room) {
    this.selectedRoom = room;
  }

  onFormSubmit(room: Room) {
    this.selectedRoom.name = room.name;
    this.selectedRoom.size = room.size;
    if (room.id > 0) {
      
    } else {
      this.selectedRoom.id = this.rooms.length+1;
      this.rooms.push(this.selectedRoom);
    }
    this.selectedRoom = null;
  }
  
 

  ngOnInit() {
  }

  onNewClick() {
    this.selectedRoom = new Room();
  }

}
