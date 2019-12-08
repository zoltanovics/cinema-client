import { Injectable } from '@angular/core';
import { Projection } from './projection';
import { Movie } from './movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {

  movies: Movie[];

  projectionsUrl : string;

  projections: Projection[];

  constructor(private http: HttpClient) {
    this.projectionsUrl = 'http://localhost:8080/projections'; 
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
    this.http.post(this.projectionsUrl, projection).subscribe();
  }

  updateProjection(projection : Projection) {
    this.http.put(this.projectionsUrl + "/" + projection.id, projection).subscribe();
  }

}
