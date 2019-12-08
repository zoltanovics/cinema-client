import { Component, OnInit } from '@angular/core';
import { ProjectionService } from '../projection.service';
import { Projection } from '../projection';

@Component({
  selector: 'projection-list',
  templateUrl: './projection-list.component.html',
  styleUrls: ['./projection-list.component.css']
})
export class ProjectionListComponent implements OnInit {

  projections: Projection[] = [];

  constructor(
    private projectionService: ProjectionService
  ) { 
    this.projections = projectionService.getProjections();
  }

  selectedProjection: Projection;


  onSelectProjection(projection) {
    this.selectedProjection = projection;
  }

  onFormSubmit(projection: Projection) {
    this.selectedProjection.movie = projection.movie;
    this.selectedProjection.room = projection.room;
    this.selectedProjection.projectionDate = projection.projectionDate;
    if (projection.id > 0) {
      
    } else {
      this.selectedProjection.id = this.projections.length+1;
      this.projections.push(this.selectedProjection);
    }
    this.selectedProjection = null;
  }
  
 

  ngOnInit() {
  }

  onNewClick() {
    this.selectedProjection = new Projection();
  }

}
