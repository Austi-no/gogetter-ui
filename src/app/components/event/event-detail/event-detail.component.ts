import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from '../events.service';

import { Events } from './Events';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  permalink: any;
  eventData: Events

  constructor(private service: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.permalink = this.route.snapshot.params['id'];
    this.service.getEventById(this.permalink).subscribe(data => {
      console.log(data);
      this.eventData = data;
    },
      error => console.log(error)
    )
  }

}
