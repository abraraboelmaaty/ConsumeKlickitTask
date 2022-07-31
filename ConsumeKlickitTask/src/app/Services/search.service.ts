import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  private baseUrl:string = 'http://localhost:5266/api/search/';
  //private baseUrl:string = 'http://localhost:58428/api/product';//IIS Express

  getAny(word:string){
    return this.http.get<Product[]>(`${this.baseUrl}${word}`)
  }
}
