import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setUser(data: any) {


    sessionStorage.setItem("loggedInUser", JSON.stringify(data));
    console.log(data);

  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("loggedInUser"));
  }

  setUserRole(data: any) {
    sessionStorage.setItem("userRoles", JSON.stringify(data));
  }

  getUserRole() {
    return JSON.parse(sessionStorage.getItem("userRoles"));
  }

  setToken(token) {

    sessionStorage.setItem("token", token);

  }

  getToken() {
    return sessionStorage.getItem("token");
  }


}
