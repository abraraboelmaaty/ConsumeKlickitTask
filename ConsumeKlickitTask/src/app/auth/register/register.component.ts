import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/Services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./../login/login.component.css']
})
export class RegisterComponent implements OnInit {

  roleId:number = 0;
  user:User = new User("","","","","","","","","","");
  constructor(
    public registerSer:RegisterService,
    public router:Router,
    public activatedRoute:ActivatedRoute
    ) { }
  onSubmit(){
    if (this.roleId != 0){
    this.registerSer.signUp(this.user,this.roleId).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => console.log('added'),
    });
  }
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params:ParamMap)=>{
        this.roleId =  Number(params.get('id'));
      }
    )

  }

}
