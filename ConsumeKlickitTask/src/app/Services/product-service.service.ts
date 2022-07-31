import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  private baseUrl:string = 'http://localhost:5266/api/product/';
  //private baseUrl:string = 'http://localhost:58428/api/product';//IIS Express
  getAllProducts(){//abdelrahman
    return this.http.get<Product[]>(this.baseUrl);
  }
  getById(id:number){
    return this.http.get<Product>(`${this.baseUrl}${id}`)
  }
}
