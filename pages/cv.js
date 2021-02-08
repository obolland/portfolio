import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/basePage';

import { getUserProfile } from '../actions/user';

const CV = () => {

    const { data, userLoading } = getUserProfile();

    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage title="CV">
                <h1>CV</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default CV;