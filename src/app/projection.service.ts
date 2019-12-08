import { Injectable } from '@angular/core';
import { RoomService } from './room.service';
import { MovieService } from './movie.service';
import { Projection } from './projection';
import { Movie } from './movie';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  movies: Movie[];
  rooms: Room[];

  projections: Projection[];

  constructor(movieService : MovieService, roomService : RoomService) {
    this.movies = movieService.getMovies();
    this.rooms = roomService.getRooms();
    this.projections = [
      {
        id: 1,
        movie: this.movies[0],
        room: this.rooms[0],
        projectionDate: new Date("2019.12.15 12:00"),
      },
      {
        id: 2,
        movie:  this.movies[1],
        room: this.rooms[1],
        projectionDate: new Date("2019.12.16 13:00"),
      },
    ]
   }

  getProjections() {
    return this.projections;
  }
  
  getProjection(id) {
    return this.projections.find(i => i.id == id);
  }
}
