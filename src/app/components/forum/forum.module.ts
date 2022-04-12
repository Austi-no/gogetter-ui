import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumRoutingModule } from './forum-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ForumService } from './forum.service';
import { BrowserModule } from '@angular/platform-browser';
import { ForumComponent } from './forum.component';


@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ForumRoutingModule,
    HttpClientModule,

  ],
  providers: [ForumService],
})


export class ForumModule { }
