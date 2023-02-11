import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalarieRoutingModule } from './salarie-routing.module';
import { ListeSalariesComponent } from './liste-salaries/liste-salaries.component';
import { SalarieComponent } from './salarie/salarie.component';
import { AjouterSalarieComponent } from './ajouter-salarie/ajouter-salarie.component';


@NgModule({
  declarations: [
    ListeSalariesComponent,
    SalarieComponent,
    AjouterSalarieComponent
  ],
  imports: [
    CommonModule,
    SalarieRoutingModule
  ]
})
export class SalarieModule { }
