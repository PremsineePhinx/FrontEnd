import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
  }
  
  login(){  }

  
}
