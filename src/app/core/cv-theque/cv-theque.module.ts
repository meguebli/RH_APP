import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvThequeRoutingModule } from './cv-theque-routing.module';
import { CvComponent } from './cv/cv.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { ListCvComponent } from './list-cv/list-cv.component';


@NgModule({
  declarations: [
    CvComponent,
    CvDetailsComponent,
    ListCvComponent
  ],
  imports: [
    CommonModule,
    CvThequeRoutingModule
  ]
})
export class CvThequeModule { }
