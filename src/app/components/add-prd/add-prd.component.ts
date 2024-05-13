import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { ApiCategorysService } from '../../services/api-categorys.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prd',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-prd.component.html',
  styleUrl: './add-prd.component.css'
})
export class AddPrdComponent {
  prd:IProduct={}as IProduct
  
  categories : ICategory[]=[]
  constructor(private _ApiCats : ApiCategorysService,private _ApiPrds : ApiProductsService
    , private _router : Router
  ) {
  }
  ngOnInit(): void {
    
    this._ApiCats.getAllCateogories().subscribe((res)=>{console.log("ok")
      this.categories=res
    });}

    
    AddPrd(){
      this._ApiPrds.addPrd(this.prd).subscribe({
        next:()=>{
          this._router.navigateByUrl('/products')
        },
        error:(err)=>{
           console.log(err);
           
        }
      })
    }
}
