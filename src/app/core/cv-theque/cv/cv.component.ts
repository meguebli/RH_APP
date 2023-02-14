import { CvService } from './../cv.service';
import { Cv } from './../cv';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

@Input() cvInput! : Cv;
  constructor() { }

  ngOnInit(): void {

  }

}
