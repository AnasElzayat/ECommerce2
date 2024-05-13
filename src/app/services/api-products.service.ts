import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private _httpClient:HttpClient) { }
  getAllProducts() :Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(`${environment.baseUrl}/products`)
  }

  getProductsByCategoryID(catID:number) :Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(`${environment.baseUrl}/products?catId=${catID}`)
  }

  getProductByID(pID:number) :Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${environment.baseUrl}/products/${pID}`)
  }

  addPrd(prd:IProduct):Observable<IProduct>{

    return this._httpClient.post<IProduct>(`${environment.baseUrl}/products`,JSON.stringify(prd))
  }
}
