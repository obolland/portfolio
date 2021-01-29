import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import PortfolioCards from '../../components/portfolioCards';
import WithAuth from '../../../hoc/withAuth';


const PortfolioEdit = ({ user }) => {

    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage
            title="See my latest work below"
            className="portfolio-page">
                <PortfolioCards portfolios={portfolios} />
            </BasePage>
        </BaseLayout>
    )
}
export default WithAuth(PortfolioEdit)('admin');