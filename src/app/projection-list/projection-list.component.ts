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
      this.projectionService.updateProjection(projection);
    } else {
      this.projectionService.addProjection(this.selectedProjection);
    }
    this.selectedProjection = null;
    window.location.reload();
  }
  
 

  ngOnInit() {
    this.projectionService.findAll().subscribe(data => {
      this.projections = data;
      console.log(this.projections);
    })
    
  }

  onNewClick() {
    this.selectedProjection = new Projection();
  }

}
