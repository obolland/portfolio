import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';

import { getUserProfile } from '../actions/index';

const About = () => {

    const { data, loading } = getUserProfile();

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>About</h1>
            </BasePage>
        </BaseLayout>
    )
}

export default About;