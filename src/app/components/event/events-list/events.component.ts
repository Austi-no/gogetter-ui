import { Component, OnInit, ViewChild } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventsService } from '../events.service';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public eventList: any = [];
  eventFormGroup: FormGroup;
  @ViewChild('closebutton') closebutton;
  bsInlineValue = new Date();
  public loading = false;
  constructor(private service: EventsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loading = false
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



  goto(id: string): any {
    this.router.navigate(["dashboard/event", id]);
  }

  gotoCreateEvent() {
    this.loading = true;
    this.router.navigate(["dashboard/create-event"]);
  }


  deleteEvent(id: any) {
    this.service.deleteEventById(id).subscribe(res => {
      this.getEvent();
      console.log(res);
    },
      error => {
        console.log(error.error.message)
      });
  }



  getEvent() {
    // this.loading = true;
    this.service.getAllEvents()
      .subscribe(res => {
        console.log(res)
        this.eventList = res
      })

  }

}
