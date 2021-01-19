import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';

const Secret = ({ user, loading }) => {

  return (
    <BaseLayout user={user} loading={loading}>
        <BasePage>
            <h1>Secret Page: {user.name}</h1>
        </BasePage>
    </BaseLayout>
  )
}

export default WithAuth(Secret);