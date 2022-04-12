import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsComponent } from './events.component';
import { EventsService } from '../events.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    BsDatepickerModule,

    HttpClientModule,
    NgxLoadingModule.forRoot({
      // animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#000C66',
      secondaryColour: '#F652A0',
      tertiaryColour: '#ffffff'
    }),

  ],
  providers: [EventsService]
})
export class EventsModule { }
