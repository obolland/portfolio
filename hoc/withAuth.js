import { getUserProfile } from '../actions/index';
import Redirect from '../components/shared/Redirect';

const WithAuth = (Component) => {
  return (props) => {
    const { data, loading } = getUserProfile();
    
    if (loading) {
      return <p>Loading...</p>
    }

    if (!data.name) {
      return <Redirect ssr route='/api/v1/login' />
    } else {
      return <Component user={data} loading={loading} {...props} />
    }
  }
}

export default WithAuth;