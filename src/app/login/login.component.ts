import { Component, OnInit } from '@angular/core';
import { getOAuthAuthenUrl } from '../app.config'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    window.location.href = getOAuthAuthenUrl();
  }
  
  login(){  }

  
}
