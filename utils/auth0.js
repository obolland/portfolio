import { initAuth0 } from '@auth0/nextjs-auth0';

if (process.env.NODE_ENV === 'production') {
  const redirectUrl = 'https://portfolio-me-tau.vercel.app/api/v1/callback'
  const postLogoutRedirectUrl = 'https://portfolio-me-tau.vercel.app/'
} else {
  const redirectUrl = 'http://localhost:3000/api/v1/callback'
  const postLogoutRedirectUrl = 'http://localhost:3000/'
}

  const auth0 = initAuth0({
  domain: 'dev-2e0e1f-4.eu.auth0.com',
  clientId: 'WWV4kTpHy7f8583y2bNez2yRNI5ySL8Q',
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.NODE_ENV === 'production' ? 'https://portfolio-me-tau.vercel.app/api/v1/callback' : 'http://localhost:3000/api/v1/callback',
  postLogoutRedirectUri: process.env.NODE_ENV === 'production' ? 'https://portfolio-me-tau.vercel.app/' : 'http://localhost:3000/',
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
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
