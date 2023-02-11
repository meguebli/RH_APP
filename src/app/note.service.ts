import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseAPI ="http://51.77.230.230:7700/api/notes/"
  constructor(private _http:HttpClient) { }
  getAllNotes():Observable<Note[]>{
    return this._http.get<Note[]>(this.baseAPI);
  }
  getNote(id:number):Observable<Note>{
    let api = "api";
    //return this._http.get<Note>("this.baseAPItes/" + id);
    return this._http.get<Note>(this.baseAPI+id);
  }
}
