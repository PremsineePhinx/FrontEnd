import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { OAUTH_LOGIN_URL, OAUTH_CLIENT_ID, OAUTH_SCOPE}  from './app.config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private oauthService: OAuthService) {
    this.oauthService.issuer =  OAUTH_LOGIN_URL;
    this.oauthService.redirectUri = window.location.origin;
    this.oauthService.clientId =  OAUTH_CLIENT_ID;
    this.oauthService.scope = OAUTH_SCOPE;
    this.oauthService.resource = 'code';
    this.oauthService.responseType= 'xyz';
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin();
    });
  }
}
