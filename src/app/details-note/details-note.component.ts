import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-note',
  templateUrl: './details-note.component.html',
  styleUrls: ['./details-note.component.css']
})
export class DetailsNoteComponent implements OnInit {
  idnote !:number;
  note : Note={id:0, title: '', content:'', createdAt: '', updatedAt: ''};
  constructor(private _detailService : NoteService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idnote=this._route.snapshot.params['idnote']
    this.getNote( this.idnote);
  }
  // ngAfterViewChecked():void {}

  getNote(id:number){
    this._detailService.getNote(id).subscribe((note) =>{
      console.log(note);

      this.note = note;
    })
  }
}
