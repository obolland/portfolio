import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';

const Admin = ({ user, userLoading }) => {

  return (
    <BaseLayout user={user} userLoading={userLoading}>
        <BasePage>
            <h1>Admin Page: Hello {user.name}</h1>
        </BasePage>
    </BaseLayout>
  )
}

export default WithAuth(Admin)('admin');