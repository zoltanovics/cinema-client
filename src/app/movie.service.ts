import { Injectable } from '@angular/core';
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[] = [
    {
      id: 1,
      name: 'Joker',
      genre: 'Thriller',
      description: 'Joker eredettörténetét feldolgozó Thriller',
    },
    {
      id: 2,
      name: 'Volt egyszer egy Hollywood',
      genre: 'Dráma',
      description: '1969, Los Angeles. Egy munka nélkül maradt, western tévésorozatából kikerült, munkanélküli színész (Leonardo DiCaprio) és jó barátja, kaszkadőre (Brad Pitt) együtt próbálnak boldogulni Hollywood kegyetlen világában',
    },
  ]

  constructor() { }

  getMovies() {
    return this.movies;
  }
  
  getMovie(id) {
    return this.movies.find(i => i.id == id);
  }

}
