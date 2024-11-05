import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const APIURL = 'https://fakestoreapi.com';
@Injectable({
  providedIn: 'root'
})
export class PlatziService {
  private _htpp = inject(HttpClient)

  getProducts(){
    return this._htpp.get(`${APIURL}products`);
  }
  getProduct(id:string){
    //return  this._htpp.get(APIURL+ 'products/'+id);
    return this._htpp.get(`${APIURL}product/${id}`);
  }
  getCategories(){
    return this._htpp.get(`${APIURL}products/categories`);
  }

  getProductsByCat(category: string){
    //return  this._htpp.get(APIURL+ 'products/category/'+category);
    return this._htpp.get(`${APIURL}products/category/${category}`);
  }

  constructor() { }
}
