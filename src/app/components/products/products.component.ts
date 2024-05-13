import { Component, EventEmitter, Input ,Output} from '@angular/core';

import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import {FormsModule} from '@angular/forms';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { FormatPipe } from '../../pipes/format.pipe';
import { ProductsServiceService } from '../../services/products-service.service';
import { RouterLink } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule ,FormsModule , ProductCardDirective , FormatPipe ,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input()recievedCatId:Number=0;

  @Output() onPrdBuy: EventEmitter<IProduct>

  products: IProduct[]=[];
  /*categories:ICategory[];*/
  constructor(private _ApiPrds:ApiProductsService) {
    this.onPrdBuy=new EventEmitter();
    /*this.products = [
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
    ];*/

  /*  this.categories=[
      {id:1,name:"Mobiles"},
      {id:2,name:"Laptops"},
    ]*/
  }

  ngOnInit(): void {
    this._ApiPrds.getAllProducts().subscribe((res)=>{console.log("ok")
      this.products=res
    })};

  inputValue : Number=0;
  //selectedCatId : number =0;
  buy( p : IProduct){
    p.quantityBuy=this.inputValue.valueOf()
    if(p.quantity>0 && p.quantityBuy <= p.quantity){
    p.quantity=p.quantity-p.quantityBuy
    this.onPrdBuy.emit(p)}
  }

  navToDetails(){

  }
}
