import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iprod } from 'src/app/shared/model/prod.interface';
import { ProductsComponent } from '../products.component';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodObj !: Iprod;
  prodId !: string;
  constructor(
    private _route: ActivatedRoute,
    private _prodsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe(res => {
        // console.log(res['prodId']); // get id 
        this.prodId = res['prodId']
        this.prodObj = this._prodsService.fetchProd(this.prodId)
      })
  }

}
