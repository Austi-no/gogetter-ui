import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EventsService } from '../events.service';

declare const uploadImage: any;

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public Editor = ClassicEditor
  eventFormGroup: FormGroup;
  public imageUrl1: any = File;
  public loading = false;
  constructor(private service: EventsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    uploadImage();
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
      province: [''],
      description: [''],
      organizedByUserId: [''],
      imageUrl1: [''],


    })
  }

  onSelectedFile(e) {

    const file = e.target.files[0];
    console.log(file)
    this.imageUrl1 = file;
  }

  createEvent(data): any {
    this.loading = true;
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('city', data.city);
    formData.append('country', data.country);
    formData.append('phoneNo', data.phoneNo);
    formData.append('eventStartDate', data.eventStartDate);
    formData.append('eventEndDate', data.eventEndDate);
    formData.append('eventStartTime', data.eventStartTime);
    formData.append('eventEndTime', data.eventEndTime);
    formData.append('province', data.province);
    formData.append('description', data.description);
    formData.append('organizedByUserId', data.organizedByUserId);
    formData.append('imageUrl1', this.imageUrl1);


    this.service.createNewEvent(formData).subscribe(response => {

      console.log(response);
      this.eventFormGroup.reset();
      this.router.navigate(["dashboard/events"])
    });
  }

}
