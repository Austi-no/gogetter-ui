import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StartComponent } from './start.component';
import { OwlModule, OwlCarousel } from 'ngx-owl-carousel';


@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule

  ]
})
export class StartModule { }
