import { ActivatedRoute } from '@angular/router';
import { SalarieDto } from './../salarie.dto';
import { SalarieService } from './../salarie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarie',
  templateUrl: './salarie.component.html',
  styleUrls: ['./salarie.component.css']
})
export class SalarieComponent implements OnInit {
  unSalarie !: SalarieDto;
  id_user !: string;
  constructor(private salarieService$: SalarieService, private _route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id_user = this._route.snapshot.params['id_sal'];
    this.getSalarie(this.id_user);
  }
  getSalarie(id:string){
    this.salarieService$.UnSalarie(id).subscribe(
      (sal)=>{
        this.unSalarie=sal;
      }
      )
  }


}
