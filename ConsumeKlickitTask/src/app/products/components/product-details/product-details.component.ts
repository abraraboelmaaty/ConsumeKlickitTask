import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  imageSource:string = "./../../../../assets/images/"
  constructor(
    public proSer: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  proId :number = 0;
  showProduct: Product = new Product("",0,"","","",0);
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        this.proId =  Number(params.get('id'));
      }
    )
    if (this.proId != 0) {
      this.proSer.getById(this.proId).subscribe({
        next: (res) => {
          console.log(res);
          this.showProduct = res;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('get one');
        },
      });
    }
  }
  back() {
    this.router.navigate(['/index']);
  }

}
