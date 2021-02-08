import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import WithAuth from '../../hoc/withAuth';

const Dashboard = ({user, userLoading}) => {
    return (
        <BaseLayout user={user} userLoading={userLoading}>
            <BasePage title="Dashboard">
                <h1>stuff</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default WithAuth(Dashboard)('admin');

// note - if we're useing WithAuth from hoc, we do not need to import getUserProfile