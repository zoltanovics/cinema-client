import { Injectable } from '@angular/core';
import { Projection } from './projection';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MovieService } from './movie.service';
import { Room } from './room';
import { RoomService } from './room.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  movies: Movie[];

  filteredMovies : Movie[];

  rooms: Room[];

  filteredRooms : Room[];

  projectionsUrl : string;

  projections: Projection[];

  constructor(private http: HttpClient,private movieService : MovieService, private roomService : RoomService) {
    this.projectionsUrl = 'http://localhost:8080/projections'; 
    movieService.findAll().subscribe(result => {
      this.movies = result;
    });
    roomService.findAll().subscribe(result => {
      this.rooms = result;
    });
  }

  public findAll(): Observable<Projection[]> {
    return this.http.get<Projection[]>(this.projectionsUrl);
  }

  getProjections() {
    return this.projections;
  }
  
  getProjection(id) {
    return this.http.get<Projection>(this.projectionsUrl + "/" + id);
  }

  addProjection(projection : Projection) {
    console.log(projection);
    this.http.post(this.projectionsUrl, projection).subscribe();
  }

  updateProjection(projection : Projection) {
    this.filteredMovies = this.movies.filter(i=> i.name === projection.movie.name);
    projection.movie = this.filteredMovies.pop();
    this.filteredRooms = this.rooms.filter(i=> i.name === projection.room.name);
    projection.room = this.filteredRooms.pop();
    console.log({
      "id" : 1,
      "projectionDate" : projection.projectionDate.toString().substring(0,10),
      "movie" : projection.movie.id,
      "room" : projection.room
    });
    this.http.put(this.projectionsUrl + "/" + projection.id, {
      "id" : 1,
      "projectionDate" : projection.projectionDate.toString().substring(0,10),
      "movie" : projection.movie.id,
      "room" : projection.room.id
    }).subscribe();
  }

}
