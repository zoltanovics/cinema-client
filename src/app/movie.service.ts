import { Injectable } from '@angular/core';
import { Movie } from "./movie";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Projection } from './projection';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  moviesUrl : string;

  movies: Movie[] = []

  constructor(private http: HttpClient) {
    this.moviesUrl = 'http://localhost:8080/movies'; 
  }

  public findAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovies() {
    return this.movies;
  }
  
  getMovie(id) {
    return this.http.get<Movie>(this.moviesUrl + "/" + id);
  }

  addMovie(movie : Movie) {
    this.http.post(this.moviesUrl,movie).subscribe();
  }

  updateMovie(movie : Movie) {
    this.http.put(this.moviesUrl + "/" + movie.id, {
      "name" : movie.name,
      "description" : movie.description,
      "genre" : movie.genre,
      "projections" : movie.projections.filter
    }).subscribe();
  }

}
