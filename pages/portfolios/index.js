import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import { getUserProfile } from '../../actions/user';
import dbConnect from '../../db/mongoDBConnect';
import Portfolio from '../../db/models/portfolio';
import CoverFlow from '../../components/coverFlow';

const Portfolios = ({ portfolios }) => {

    const { data, userLoading } = getUserProfile();
    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage
                title="See my latest work below"
                className="portfolio-page"
            >
                    <CoverFlow 
                        portfolios={portfolios}
                        user={data}
                        userLoading={userLoading}
                    />
            </BasePage>
        </BaseLayout>
    )
}


export async function getStaticProps(context) {
    await dbConnect()

    const res = await Portfolio.find({})
    const portfolios = JSON.parse(JSON.stringify(res))
    return { 
        props: { portfolios },
        revalidate: 1
    }
}


export default Portfolios;