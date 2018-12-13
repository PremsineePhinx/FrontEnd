import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {getOAuthAuthenUrl, OAUTH_REDIRECT_URI} from "../../app/app.config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private oauthService: OAuthService,public http: HttpClient,) { }

  ngOnInit() {
  
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    // let options = new RequestOptions({ headers: headers });
    // let postParams = {
    //   params: {
    //     UserName: this.todo.value.title,
    //     Password: this.todo.value.password
    //   }
    // }

    //same but too long
    // return new Promise((resolve, reject) => {
      this.http.post('https://sis.cmu.ac.th/cmusis/API/User/checkUser', {headers: headers})
    //     .toPromise()
    //     .then((response) => {
    //       console.log('API Response : ', response);
    //       this.log()
    //       // this.data2 = response.json();
    //     })
    //     .catch((error) => {
    //       console.error('API Error : ', error.status);
    //       console.error('API Error : ', JSON.stringify(error));
    //       this.login();
    //       reject(error.json());
    //     });
    // });

    let authenUrl = getOAuthAuthenUrl();
    return new Promise((resolve, reject) => {

      let isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:4200'));
        window.open(authenUrl, '_self');

    });
  }
  
     
}
