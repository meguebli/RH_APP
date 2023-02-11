import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  constructor(private _noteServ :NoteService, private _route : Router) { }
  notes !:Note[];
  note !:Note;
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes(){
   this._noteServ.getAllNotes().subscribe((data)=>{
    console.log(data);

    this.notes = data;
   }

   )
  }

  getNote(id:number){
    this._noteServ.getNote(id).subscribe((note) =>{
      console.log(note);

      this.note = note;
      this._route.navigate(['/note/'+id]);
    })
  }

}
