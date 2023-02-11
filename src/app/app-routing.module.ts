import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { DetailsNoteComponent } from './details-note/details-note.component';

const routes: Routes = [
 
  {path:'',component:AppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
