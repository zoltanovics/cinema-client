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
      this.selectedProjection.id = this.projections.length+1;
      this.projectionService.addProjection(this.selectedProjection);
    }
    this.selectedProjection = null;
    window.location.reload();
  }
  
 

  ngOnInit() {
    this.projectionService.findAll().subscribe(data => {
     /* let i = 1;
      data.forEach(element => {
        this.projectionService.getProjection(i).subscribe(data => {
          this.projections.push(data);
        });
        i = i+1;
      });*/
      this.projections = data;  
    })
    
  }

  onDeleteClick(projection : Projection) {
    this.projectionService.deleteProjection(projection);
  }

  onNewClick() {
    this.selectedProjection = new Projection();
  }

  

}
