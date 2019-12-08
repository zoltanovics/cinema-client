import { Component, OnInit, OnChanges, Input, Output, EventEmitter  } from '@angular/core'; 
import { Room } from '../room';

@Component({
  selector: 'room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {

  model: Room;
  @Output() onSubmit = new EventEmitter<Room>();
  @Input() room: Room;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.room);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }


}
