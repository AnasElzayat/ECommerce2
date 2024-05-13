import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../../services/products-service.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  constructor(private _activeRoute :ActivatedRoute,private _prdService : ProductsServiceService,private _router :Router) {
    
    
  }

  id:string|undefined='0'
  prd:IProduct|undefined={} as IProduct
  ngOnInit(): void {
    /*this._router.navigate(["details/",this.id])*/

    this.id=(this._activeRoute.snapshot.paramMap.get('id'))?.toString()
    this.prd= this._prdService.getProductByID(this.id);
  }
}
