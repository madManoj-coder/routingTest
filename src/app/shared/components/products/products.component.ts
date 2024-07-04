import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../model/prod.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  prodArr !: Array<Iprod>;
  selectedId !: string;
  constructor(
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.prodArr = this._productsService.fetchAllProds()
  }

  onGetSelectedId(id: string) {
    this.selectedId = id;
  }

}
