import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchWord:string|any = (this.route.snapshot.paramMap.get('id'))
  products:Product[]=[];
  searchText:string = "";
  public mainUrl:string="";
imageSource:string = "./../../../../assets/images/"
  constructor(public searchSer:SearchService,public route:ActivatedRoute) { }

  ngOnInit(): void {
   this.mainUrl="https://localhost:5266/";
    this.searchSer.getAny(this.searchWord).subscribe({
      next:a=>{this.products=a,console.log(this.products)}
    })
  }

}
