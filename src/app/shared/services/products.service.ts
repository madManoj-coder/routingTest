import { Injectable } from '@angular/core';
import { Iprod } from '../model/prod.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  prod: Array<Iprod> = [
    {
      pName: 'Samsung 31',
      pStatus: 'In-progress',
      id: '101',
      canReturn: 0
    },
    {
      pName: 'Samsung S32',
      pStatus: 'Dispatched',
      id: '102',
      canReturn: 1
    },
    {
      pName: 'Iphone 15pro',
      pStatus: 'Delivered',
      id: '103',
      canReturn: 1
    },
  ];

  fetchAllProds(): Array<Iprod> {
    return this.prod
  }

  fetchProd(id: string): Iprod {
    return this.prod.find(prod => prod.id === id) as Iprod
  }

  updateProd(updatedObj: Iprod) {
    let index = this.prod.findIndex(prod => prod.id === updatedObj.id)
    this.prod[index] = updatedObj
    // console.log(this.prod);
    
  }

  addProd(prodObj: Iprod) {
    this.prod.push(prodObj)
  }


}
