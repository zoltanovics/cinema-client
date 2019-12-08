import { Component, OnInit } from '@angular/core';
import { Projection } from '../projection';
import { ActivatedRoute } from '@angular/router';
import { ProjectionService } from '../projection.service';

@Component({
  selector: 'projection-detail',
  templateUrl: './projection-detail.component.html',
  styleUrls: ['./projection-detail.component.css']
})
export class ProjectionDetailComponent implements OnInit {

  projection: Projection = null;

  constructor(
    private route: ActivatedRoute,
    private projectionService: ProjectionService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projection = this.projectionService.getProjection(id);
  }

}
