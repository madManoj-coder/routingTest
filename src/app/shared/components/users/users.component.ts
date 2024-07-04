import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../model/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr !: Iuser[];
  selectedId !: string;
  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userArr = this._userService.fetchAllUsers()
  }

  getselectedId(id: string) {
    this.selectedId = id;
  }

}
