import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import { WithAuth } from '../utils/auth0';

const AdminSSR = ({ user }) => {

  return (
    <BaseLayout user={user} userLoading={false}>
        <BasePage>
            <h1>Secret Page. Hello {user.name}</h1>
        </BasePage>
    </BaseLayout>
  )
}

export const getServerSideProps = WithAuth()('admin');

export default AdminSSR;