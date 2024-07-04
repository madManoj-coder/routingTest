import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  userId!: string;
  userObj!: Iuser;
  editMode: boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _userservice: UsersService,
    private _uuidservice: UuidService
  ) { }

  ngOnInit(): void {
    this.createUsersForm()
    this.userId = this._route.snapshot.params['userId']
    if (this.userId) {
      this.editMode = true;
      this.userObj = this._userservice.fetchUser(this.userId)
      this.userForm.patchValue(this.userObj)
    }
    this._route.queryParams
      .subscribe(res => {
        if (res['userRole'] === "Candidate") {
          this.userForm.disable();
          this.editMode = false;
        } else {
          this.userForm.enable();
          this.editMode = true;
        }
      })
  }

  createUsersForm() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })
  }

  onUpdateUser() {
    let updatedUser = { ...this.userForm.value, userId: this.userId }
    console.log(updatedUser);
    this._userservice.updateUser(updatedUser)
  }


  onAddUser() {
    let userObj = { ...this.userForm.value, userId: this._uuidservice.uuidv4() }
    console.log(userObj);
    this.userForm.reset()
    this._userservice.addUser(userObj)
  }

}
