import { Component, OnInit, Input } from '@angular/core';
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

  userName: string = "";

  couponName: string = "";

  constructor(
    private route: ActivatedRoute,
    private projectionService: ProjectionService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectionService.getProjection(id).subscribe(data => {
      this.projection = data;
    });
  }

  onReservationClick() {
    this.projectionService.reserveChair(this.projection,this.userName,this.couponName);
  }

}
