import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { GenreFilterComponent } from './genre-filter/genre-filter.component';
import { MatButtonToggleModule,MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CouponDetailComponent } from './coupon-detail/coupon-detail.component';
import { CouponFormComponent } from './coupon-form/coupon-form.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ProjectionDetailComponent } from './projection-detail/projection-detail.component';
import { ProjectionFormComponent } from './projection-form/projection-form.component';
import { ProjectionListComponent } from './projection-list/projection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieDetailComponent,
    GenreFilterComponent,
    CouponDetailComponent,
    CouponFormComponent,
    CouponListComponent,
    RoomDetailComponent,
    RoomFormComponent,
    RoomListComponent,
    ProjectionDetailComponent,
    ProjectionFormComponent,
    ProjectionListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatSelectModule,
    NoopAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    RoutingModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
