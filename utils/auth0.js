import { initAuth0 } from '@auth0/nextjs-auth0';
require('dotenv').config()

export default initAuth0({
  domain: 'dev-2e0e1f-4.eu.auth0.com',
  clientId: 'WWV4kTpHy7f8583y2bNez2yRNI5ySL8Q',
  clientSecret: process.env.CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/v1/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.COOKIE_SECRET,
  }
});