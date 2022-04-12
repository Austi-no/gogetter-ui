import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EventsService {



  baseURL: string = 'https://gogetters.azurewebsites.net/api/Events';
  baseurl: string = 'https://backend20200730075150.azurewebsites.net/api/Events'

  constructor(private http: HttpClient) { }

  createNewEvent(formData: FormData): Observable<any> {
    return this.http.post(this.baseURL, formData);
  }

  getAllEvents(): any {
    return this.http.get(this.baseURL);
  }

  deleteEventById(id: any): any {
    return this.http.delete(this.baseURL + id);
  }

  getEventById(id: any): Observable<any> {
    return this.http.get(this.baseURL + "/GetEventById/" + id);
  }





}
