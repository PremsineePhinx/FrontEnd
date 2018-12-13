import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { OAUTH_LOGIN_URL, OAUTH_CLIENT_ID, OAUTH_SCOPE}  from './app.config';

export const authConfig: AuthConfig = {
  issuer:  OAUTH_LOGIN_URL,
  redirectUri: window.location.origin,
  clientId:  OAUTH_CLIENT_ID,
  scope: OAUTH_SCOPE,
  resource: 'code',
  responseType: 'xyz'
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }
  
  private configureWithNewConfigApi(){
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
