import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  products: IProduct[];
  constructor() { 
    this.products = [
      {
        id: 1,
        name: 'Iphone',
        price: 15000,
        quantity: 2,
        imgUrl: "assets/images/phone.jpeg",
        catId: 1,
        quantityBuy: 0 
      },
      {
        id: 2,
        name: 'Oppo',
        price: 6000,
        quantity: 0,
        imgUrl: "assets/images/phone.jpeg",
        catId: 1,quantityBuy: 0 
      },
      {
        id: 3,
        name: 'Honor',
        price: 3500,
        quantity: 1,
        imgUrl: "assets/images/phone.jpeg",
        catId: 1,quantityBuy: 0 
      },
      {
        id: 4,
        name: 'Hp Laptop',
        price: 40000,
        quantity: 4,
        imgUrl: "assets/images/lab.jpeg",
        catId: 2,quantityBuy: 0 
      },
      {
        id: 5,
        name: 'lenovo lap',
        price: 50000,
        quantity: 2,
        imgUrl: "assets/images/lab.jpeg",
        catId: 2,quantityBuy: 0 
      },
      {
        id: 6,
        name: 'samsung lap',
        price: 7000,
        quantity: 0,
        imgUrl: "assets/images/lab.jpeg",
        catId: 2,quantityBuy: 0 
      },
    ];
  }


  getProductsByCatID(catID:number): IProduct []{

    return this.products.filter((prd)=>prd.catId==catID);
  }
	getProductByID(prodID:string|undefined): IProduct|undefined{
    return this.products.find((prd)=>prd.id.toString()==prodID)
  }
  getAllProducts():IProduct []{
    return this.products
  }



}
