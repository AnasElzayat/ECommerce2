import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCategorysService {

  constructor(private _httpClient:HttpClient) { }
  getAllCateogories() :Observable<ICategory[]>{
    return this._httpClient.get<ICategory[]>(`${environment.baseUrl}/categories`)
  }
}
