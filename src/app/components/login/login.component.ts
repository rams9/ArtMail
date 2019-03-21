import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username ="";
  password="";
  result:any;
  loginSubscribe:any;
  private _loginService: LoginService;
  constructor(private login:LoginService) {
  
   }

public LoginVerify()
{
debugger;


const data={
  UserId:this.username,
  Password:this.password
}
this.loginSubscribe=this.login.CheckLogin(data).subscribe(
  (res)=>{
this.result=res;
  },
  (err:HttpErrorResponse)=>{
if(err.error instanceof Error )
{
  console.log("client side error;")
}else
{
  console.log("server side error");
}
});

}

  ngOnInit() {
  }

  ngOnDestroy() {
this.loginSubscribe.unsubscribe();
  }


}
