import { CvService } from './../cv.service';
import { Cv } from './../cv';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  constructor(private CvService$:CvService) { }
cvs!:Cv[];
  ngOnInit(): void {
    this.getAllCv()
  }
getAllCv(){
this.cvs= this.CvService$.getAllCv()



}
}

