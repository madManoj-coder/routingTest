import { Injectable } from '@angular/core';
import { Iuser } from '../model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr: Array<Iuser> = [
    {
      username: "Jhon",
      userId: '1',
      userRole: 'Candidate'
    },
    {
      username: "Jen",
      userId: '2',
      userRole: 'Candidate'
    },
    {
      username: "James",
      userId: '3',
      userRole: "Admin"
    },
    {
      username: "May",
      userId: '4',
      userRole: "Admin"
    },
  ]
  constructor() { }

  fetchAllUsers(): Array<Iuser> {
    return this.usersArr
  }

  fetchUser(userId: string): Iuser {
    return this.usersArr.find(user => user.userId === userId) as Iuser
  }

  updateUser(userobj: Iuser) {
    let ind = this.usersArr.findIndex(user => user.userId === userobj.userId)
    this.usersArr[ind] = userobj
  }

  addUser(userObj: Iuser) {
    this.usersArr.push(userObj)
  }


}
