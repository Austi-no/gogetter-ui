import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventsService } from '../components/event/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventFormGroup: FormGroup;
  public eventList: any = [];
  constructor(private router: Router, private service: EventsService, private formBuilder: FormBuilder) { }

  ngOnInit() {

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
    this.getEvent();
  }

  login() {
    this.router.navigate(['login']);
  }

  signup() {
    this.router.navigate(['signup']);
  }

  getEvent() {
    this.service.getAllEvents()
      .subscribe(res => this.eventList = res)

  }

}
