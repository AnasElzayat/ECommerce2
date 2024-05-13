import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import {FormsModule} from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ApiCategorysService } from '../../services/api-categorys.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ProductsComponent,CommonModule ,FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories:ICategory[]=[];
  selectedCatId : number =0;
  constructor(private _ApiCats : ApiCategorysService) {
    /*this.categories=[
      {id:1,name:"Mobiles"},
      {id:2,name:"Laptops"},]*/
  }
  ngOnInit(): void {
    this._ApiCats.getAllCateogories().subscribe((res)=>{console.log("ok")
      this.categories=res
    });
  }



  ReceivedProducts : IProduct[] = []
  change(p:IProduct){
    this.ReceivedProducts.push(p)
  }
  

}
