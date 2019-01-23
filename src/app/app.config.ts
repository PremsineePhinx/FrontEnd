export const OAUTH_LOGIN_URL = 'https://oauth.cmu.ac.th/v1/Authorize.aspx';
export const OAUTH_TOKEN_URL = 'https://oauth.cmu.ac.th/v1/GetToken.aspx';
export const OAUTH_CLIENT_ID = 'JWxuztHzc61zK13yKRszeTKErxe615H83gQ3v9wh';
export const OAUTH_CLIENT_SECRET = 'CnfhRa1yRZ8865j1m2dbpNJgz2FCn9cKvj62NC0q';
export const OAUTH_REDIRECT_URI = 'http://localhost:4200/home';
export const OAUTH_SCOPE = 'cmuitaccount.basicinfo'; 

export function getOAuthAuthenUrl() {
  let backUrl = window.location.origin + '%2F%23%2Flogin'
  return `${OAUTH_LOGIN_URL}?response_type=code&client_id=${OAUTH_CLIENT_ID}&redirect_uri=${OAUTH_REDIRECT_URI}&scope=${OAUTH_SCOPE}&state='success'`;
}
