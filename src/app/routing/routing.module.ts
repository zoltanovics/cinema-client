import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from "../movie-list/movie-list.component";
import { MovieFormComponent } from '../movie-form/movie-form.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

import { CouponListComponent } from "../coupon-list/coupon-list.component";
import { CouponFormComponent } from '../coupon-form/coupon-form.component';
import { CouponDetailComponent } from '../coupon-detail/coupon-detail.component';

import { RoomListComponent } from "../room-list/room-list.component";
import { RoomFormComponent } from '../room-form/room-form.component';
import { RoomDetailComponent } from '../room-detail/room-detail.component';

import { ProjectionListComponent } from "../projection-list/projection-list.component";
import { ProjectionFormComponent } from '../projection-form/projection-form.component';
import { ProjectionDetailComponent } from '../projection-detail/projection-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
  {
    path: 'movies/add',
    component: MovieFormComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  {
    path: 'coupons/:id',
    component: CouponDetailComponent
  },
  {
    path: 'coupons/add',
    component: CouponFormComponent
  },
  {
    path: 'coupons',
    component: CouponListComponent
  },
  {
    path: 'rooms/:id',
    component: RoomDetailComponent
  },
  {
    path: 'rooms/add',
    component: RoomFormComponent
  },
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: 'projections/:id',
    component:ProjectionDetailComponent
  },
  {
    path: 'projections/add',
    component: ProjectionFormComponent
  },
  {
    path: 'projections',
    component: ProjectionListComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
