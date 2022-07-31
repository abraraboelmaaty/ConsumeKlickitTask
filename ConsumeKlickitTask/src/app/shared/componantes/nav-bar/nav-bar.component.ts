import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories:[] = [];
  searchText:string = '';
  logoSource:string = "./../../../../assets/images/Logo.png"
  constructor(private userSer:UserService,) { }

  ngOnInit(): void {
  }
  login(){
    return this.userSer.userExist();
  }
  logout() {
    this.userSer.clear();

  }

}
