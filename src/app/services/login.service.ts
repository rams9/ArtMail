import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  public CheckLogin(obj:any):any{

   return  this._http.post("http://localhost:52674/api/Home/Login", obj);
  }
}
