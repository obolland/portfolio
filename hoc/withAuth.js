import { getUserProfile } from '../actions/user';
import Redirect from '../components/shared/Redirect';
import { isAuthorised } from '../utils/auth0';

const WithAuth = (Component) => (role) => {
  return (props) => {
    const { data, userLoading } = getUserProfile();
    if (userLoading) {
      return <p>Loading...</p>
    }

    //note - replace with useRouter
    if (!data.name) {
      return <Redirect ssr route='/api/v1/login' />
    } else {

      if (role && !isAuthorised(data, role)) {
        return <Redirect ssr route='/api/v1/login' />
      }

      return <Component user={data} userLoading={userLoading} {...props} />
    }
  }
}

export default WithAuth;