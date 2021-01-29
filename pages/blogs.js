import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/basePage';

import { getUserProfile } from '../actions/user';

const Blogs = () => {

    const { data, userLoading } = getUserProfile();

    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage>
                <h1>Blogs</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default Blogs;