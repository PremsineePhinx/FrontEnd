import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getOAuthAuthenUrl } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(){
    return this.http.get(getOAuthAuthenUrl());
  }

  // login(data){
  //   return this.http.get('localhost:3000/user/' + data);
  // }
}
