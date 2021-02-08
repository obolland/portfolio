import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';

const Secret = ({ user, userLoading }) => {

  return (
    <BaseLayout user={user} userLoading={userLoading}>
        <BasePage>
            <h1>Secret Page: {user.name}</h1>
        </BasePage>
    </BaseLayout>
  )
}

export default WithAuth(Secret)();