import { Observable } from 'rxjs';
import { SalarieDto } from './salarie.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
API='https://jsonplaceholder.typicode.com/users';
  constructor(private _http:HttpClient) { };
  TousSalaries():Observable<SalarieDto[]>{
    return this._http.get<SalarieDto[]>(this.API);
  }
  UnSalarie(id:string):Observable<SalarieDto>{
    return this._http.get<SalarieDto>(this.API+'/'+id);
  }
}
