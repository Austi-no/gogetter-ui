import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { StartService } from './start.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';





declare const myTest: any;


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {


  title = "GoGetters";
  public eventList: any = [];
  public userList: any = [];
  eventFormGroup: FormGroup;
  userFormGroup: FormGroup;
  attendForm: FormGroup;



  loading: boolean = true

  constructor(private service: StartService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): any {

    myTest()

    this.getEvent();
    this.getUsers();

    this.attendForm = this.formBuilder.group({
      eventId: ['', [Validators.required]],
      userid: ['', [Validators.required]]
    })

    this.eventFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      location: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      eventStartDate: ['', [Validators.required]],
      eventEndDate: ['', [Validators.required]],
      eventStartTime: ['', [Validators.required]],
      eventEndTime: ['', [Validators.required]],
      mainDisplayPicture: ['', [Validators.required]],
      province: [''],
      description: [''],
      organizedByUserId: ['']

    })
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      profilePicture: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      currentCity: ['', [Validators.required]],

    })

  }



  getEvent() {
    this.service.getAllEvents()
      .subscribe(res => {
        this.eventList = res
        this.loading = false
      })

  }

  getAttendId(e) {
    // this.service.attendEvent(this.attendForm.value).subscribe(res => {
    console.log(e.target.value);
    // })
  }


  getUsers() {
    this.service.getUsers()
      .subscribe(res => this.userList = res)

  }
  gotoEvent(id: any): any {
    this.router.navigate(["dashboard/event", id]);
  }



}
