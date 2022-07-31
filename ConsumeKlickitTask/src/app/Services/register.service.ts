import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl:string = 'http://localhost:5266/api/Auth';
  //private baseUrl:string = 'http://localhost:58428/api/Auth';//IIS Express
  constructor( public http: HttpClient){}
  signUp(user:User,id:Number){
    return this.http.post<User>(`${this.baseUrl}/${id}`,user);

  }
}
