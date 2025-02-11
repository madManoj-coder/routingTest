import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  err !: string;
  constructor(
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.err = this._route.snapshot.data['msg']
  }

}
