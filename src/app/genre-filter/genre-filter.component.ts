import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  genres: string[] = [ 'Thriller', 'Drama' ];
  @Input('genre') selectedGenre: string = '';
  @Output() onChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    
  }

  onFilterChange(genre: string) : void {
    this.selectedGenre = genre;
    this.onChange.emit(genre);
  }

}
