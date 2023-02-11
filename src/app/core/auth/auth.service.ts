import { UserDto } from './user.dto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user={
    login:'test',
    password:'test',
    status :true
  };
  constructor() { }
  isLogin(login:string,pwd:string){
    if (this.user.login == login && this.user.password == pwd){
      localStorage.setItem('tokenAPI', this.getToken())
      return true;

    }else{
      return false;
    }

  }
  getToken():string{
    return "test"
  }
  register(user:UserDto){

  }
}
