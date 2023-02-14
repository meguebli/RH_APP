import { ListCvComponent } from './list-cv/list-cv.component';
import { CvComponent } from './cv/cv.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:CvComponent},
  {path:'list',component:ListCvComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvThequeRoutingModule { }
