import { AjouterSalarieComponent } from './ajouter-salarie/ajouter-salarie.component';
import { SalarieComponent } from './salarie/salarie.component';
import { ListeSalariesComponent } from './liste-salaries/liste-salaries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:ListeSalariesComponent},
  {path: ':id_sal', component:SalarieComponent},
  {path:'ajouter/:id', component:AjouterSalarieComponent},
  {path: '**', component:ListeSalariesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalarieRoutingModule { }
