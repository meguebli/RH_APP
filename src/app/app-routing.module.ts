import { RoleGuard } from './midellware/role.guard';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { DetailsNoteComponent } from './details-note/details-note.component';

const routes: Routes = [


  {path:'salarie',canActivate:[RoleGuard] ,loadChildren: () =>import('./core/salarie/salarie.module').then((m)=>m.SalarieModule)},
  {path:'' ,loadChildren: () =>import('./core/auth/auth.module').then((m)=>m.AuthModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
