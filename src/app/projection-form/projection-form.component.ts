import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Projection } from '../projection';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'projection-form',
  templateUrl: './projection-form.component.html',
  styleUrls: ['./projection-form.component.css']
})
export class ProjectionFormComponent implements OnInit {

  movies : Movie[];
  movieModel : Movie;

  model: Projection;
  @Output() onSubmit = new EventEmitter<Projection>();
  @Input() projection: Projection;

  constructor(movieService : MovieService) { 
    this.movies = movieService.getMovies();
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.model = Object.assign({}, this.projection);
  }

  submit(form) {
    if (!form.valid) {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
