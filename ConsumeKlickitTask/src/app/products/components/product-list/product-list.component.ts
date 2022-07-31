import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  searchText:string = "";
  public mainUrl:string="";
imageSource:string = "./../../../../assets/images/"
  constructor(public proSer:ProductServiceService) { }

  ngOnInit(): void {
   this.mainUrl="https://localhost:5266/";
    this.proSer.getAllProducts().subscribe({
      next:a=>{this.products=a,console.log(this.products)}
    })
  }

}
