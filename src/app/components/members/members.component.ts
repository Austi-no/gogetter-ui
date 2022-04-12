import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MembersService } from './members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  userFormGroup: FormGroup;
  public userList: any = [];
  loading: boolean = true
  constructor(private formBuilder: FormBuilder, private service: MembersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {

    this.service.getAllMembers()
      .subscribe(result => {
        this.userList = result;
        console.log(result)
        this.loading = false
      },
        error => {
          this.loading = false
          console.log(error.message)
        });
  }

  // getUsers() {
  //   this.service.getAllMembers()
  //     .subscribe(res => this.userList = res)

  // }


}
