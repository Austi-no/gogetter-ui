import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {


  baseUrl: string = 'https://gogetters.azurewebsites.net/api/users/GetAllUsers';

  constructor(private http: HttpClient) { }

  getAllMembers() {
    return this.http.get(this.baseUrl);
  }
  getMemberById(id: any): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

}
