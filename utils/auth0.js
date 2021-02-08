import { initAuth0 } from '@auth0/nextjs-auth0';

  const auth0 = initAuth0({
  domain: 'dev-2e0e1f-4.eu.auth0.com',
  clientId: 'WWV4kTpHy7f8583y2bNez2yRNI5ySL8Q',
  clientSecret: 'SSbmtBN8bLp8jdG55x6fdmeumDSIYHU4bAjseLtHcXRfh8DXkIJRblvWnYrSp8dM',
  scope: 'openid profile',
  redirectUri: 'http://localhost:3000/api/v1/callback',
  postLogoutRedirectUri: 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: 'jfhgyrhgujdhfgryfhgjthfgsncbshla',
    storeAccessToken: true,
    storeRefreshToken: true
  }
});

export default auth0;


export const WithAuth = () => (role) => async ({ req, res }) => {
    const session = await auth0.getSession(req);
    if (!session || !session.user || role && !isAuthorised(session.user, role)) {
        res.writeHead(302, {
        Location: '/api/v1/login'
      });
      res.end();
      return {props: {}};
    }
  
    return {props: {user: session.user}};
}


export const isAuthorised = (user, role) => {
  return (user && user['https://ollybolland.com/roles'].includes(role))
}