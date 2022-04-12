import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartService {
  baseUrl: string = 'https://gogetters.azurewebsites.net/api/Events';
  userUrl: string = 'https://gogetters.azurewebsites.net/api/users/GetAllUsers';
  attendUrl: string = 'https://gogetters.azurewebsites.net/api/EventAttendees/RegisterToAttendEvent';

  constructor(private http: HttpClient) { }
  getAllEvents() {
    return this.http.get(this.baseUrl);
  }

  getUsers() {
    return this.http.get(this.userUrl);
  }

  attendEvent(attend: any): any {
    return this.http.post(this.attendUrl, attend)

  }
}
