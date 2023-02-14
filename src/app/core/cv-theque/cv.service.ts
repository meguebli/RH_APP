import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  ApiCv = [
    {
      mat: '1234565',
      name: 'amine',
      age: '24',
      photo: './assets/bb.jfif',
      Libelle: 'developpeur angular',
      specialite: 'angular/nodeJs',
    },
    {
      mat: '1238795',
      name: 'rawtha',
      age: '28',
      photo: './assets/cc.jfif',
      Libelle: 'developpeur angular',
      specialite: 'angular/nodeJs',
    },
    {
      mat: '1234565',
      name: 'hedi',
      age: '29',
      photo: './assets/téléchargement (1).jfif',
      Libelle: 'developpeur angular',
      specialite: 'angular/nodeJs',
    }
  ];
  constructor(http: HttpClient) {}
  getAllCv(){
    return this.ApiCv;
  }
  getOneCv(i:number){
    return this.ApiCv[i]
  }
}
