import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogIn() {
    this._authservice.onAppLogIn()
    console.log('login');

  }

  onLogOut() {
    this._authservice.onAppLogOut()
    console.log('logout');
  }

}
