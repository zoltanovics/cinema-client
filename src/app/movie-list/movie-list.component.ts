import { Component, OnInit } from '@angular/core';
import { Movie } from "../movie";
import { MovieService } from "../movie.service";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  private movies: Movie[] = [];

  constructor(
    private movieService: MovieService
  ) { 
   
  }

  filteredMovies: Movie[];
  selectedGenre: string;
  selectedMovie: Movie;


  onSelectMovie(movie) {
    this.selectedMovie = movie;
  }

  onFormSubmit(movie: Movie) {
    this.selectedMovie.name = movie.name;
    this.selectedMovie.genre = movie.genre;
    this.selectedMovie.description = movie.description;
    if (movie.id > 0) {
      this.movieService.updateMovie(movie);
    } else {
      this.movieService.addMovie(this.selectedMovie);
    }
    this.selectedMovie = null;
    window.location.reload();
  }
  
 

  ngOnInit() {
    this.movieService.findAll().subscribe(data => {
      this.movies = data;
      this.filteredMovies = data;
      console.log(this.movies);
    })
    
    this.selectedGenre = '';
    this.filter();
  }

  onFilterChange(genre: string) {
    this.selectedGenre = genre;
    this.filter();
  }

  onNewClick() {
    this.selectedMovie = new Movie();
  }

  filter() {
    this.filteredMovies = this.selectedGenre === ''
    ? this.movies
    : this.movies.filter(movies => movies.genre === this.selectedGenre);
  }

  

}

