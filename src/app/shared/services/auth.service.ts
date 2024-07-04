import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginState: boolean = false;
  loginSub$: Subject<boolean> = new Subject<boolean>()

  constructor(
    private _router: Router
  ) { }

  onAppLogIn() {
    localStorage.setItem('token', 'JWT token')
    this.loginState = true;
    this.loginSub$.next(this.loginState)
    this._router.navigate(['home'])
  }

  onAppLogOut() {
    localStorage.removeItem('token')
    this.loginState = false;
    this.loginSub$.next(this.loginState)
    this._router.navigate(['/'])
  }

  Authenticate() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('token')) {
          this.loginState = true;
        } else {
          this.loginState = false;
        }
        this.loginSub$.next(this.loginState);
        resolve(this.loginState)
      }, 1000);
    })
  }
}
