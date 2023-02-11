import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService$ :AuthService, private router :Router) { }
  login :string ='login';
  pwd:string='pwd';
  ngOnInit(): void {
  }

  isLogined(){
   if(this.authService$.isLogin(this.login,this.pwd)){
    localStorage.setItem('tokenWeb',this.login);

    this.router.navigate(["salarie"]);
   //console.log('true',this.router.navigate(["salarie"]));

   }else {
    //console.log('false');
    localStorage.removeItem('token');

   }
  }

}
