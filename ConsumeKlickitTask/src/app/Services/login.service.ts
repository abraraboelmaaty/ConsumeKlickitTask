import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN_TYPE } from '../models/login';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private userLoginSer:UserService,private router:Router) { }
  private baseUrl:string = 'http://localhost:5266/api/Auth/token';
  //private baseUrl:string = 'http://localhost:58428/api/Auth/token';//IIS Express
  login(data:{email:string,password:string}){
    this.http.post<LOGIN_TYPE>(this.baseUrl,data).subscribe(
     (data)=>{
        this.userLoginSer.setUser(data),
        console.log('from service',data);

          this.router.navigate(['/index']);


     },
     (err) => console.log(err)

  );
    }
  }
