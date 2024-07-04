import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId!: string;
  userObj !: Iuser;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userservice : UsersService
  ) { }

  ngOnInit(): void {
    this._route.params
      .subscribe(res => {
        // console.log(res);
        this.userId = res['userId']
        this.userObj = this._userservice.fetchUser(this.userId)
      })
  }

  gotoEditUser() {
    this._router.navigate(['edit'], {
      relativeTo : this._route,
      queryParamsHandling : 'preserve'
    })
  }

}
