import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iprod } from 'src/app/shared/model/prod.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodForm !: FormGroup;
  prodId !: string;
  prodObj !: Iprod;
  editMode: boolean = false
  constructor(
    private _route: ActivatedRoute,
    private _prodsService: ProductsService,
    private _uuidService: UuidService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.createProdForm();
    this.prodId = this._route.snapshot.params['prodId'];
    if (this.prodId) {
      this.editMode = true;
      this.prodObj = this._prodsService.fetchProd(this.prodId)
      this.prodForm.patchValue(this.prodObj)
    }
    // console.log(this.prodObj);
    this._route.queryParams
      .subscribe(res => {
        // console.log(res);
        if (res['canEdit'] == 0) {
          this.prodForm.disable();
          this.editMode = false;
        } else {
          this.prodForm.enable();
          this.editMode = true;
        }
      })
  }

  createProdForm() {
    this.prodForm = new FormGroup({
      pName: new FormControl(null,[Validators.required]),
      pStatus: new FormControl(null,[Validators.required])
    })
  }

  onUpdateProd() {
    if (this.prodForm.valid) {
      let updatedObj: Iprod = { ...this.prodForm.value, id: this.prodId }
      // console.log(updatedObj);
      this._prodsService.updateProd(updatedObj);
      this._router.navigate(['products'])
    }
  }

  onAddProd() {
    // if(this.prodForm.valid){
      let prodObj = {...this.prodForm.value, id : this._uuidService.uuidv4()}
      this.prodForm.reset()
      // console.log(prodObj);
      this._prodsService.addProd(prodObj)
    // }
  }

}
