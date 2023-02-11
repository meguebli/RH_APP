import { SalarieDto } from './../salarie.dto';
import { SalarieService } from './../salarie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-salaries',
  templateUrl: './liste-salaries.component.html',
  styleUrls: ['./liste-salaries.component.css']
})
export class ListeSalariesComponent implements OnInit {
  salaries !:SalarieDto[];
  message!:string;
  constructor(private salarieService$:SalarieService) { }
  ngOnInit(): void {
    this.  tousSalaries();
  }


  tousSalaries(){
    this.salarieService$.TousSalaries().subscribe((data) => {
      this.salaries= data;
      console.log(this.salaries);

    })
  }
  deleteSalarie(id:string){
    console.log(' salarie deleted :', id);
    this.message=' salarie deleted :'+ id;

  }
}
