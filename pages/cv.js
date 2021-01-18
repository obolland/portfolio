import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/basePage';

import { getUserProfile } from '../actions/index';

const CV = () => {

    const { data, loading } = getUserProfile();

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>CV</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default CV;