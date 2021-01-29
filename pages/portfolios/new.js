import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import WithAuth from '../../hoc/withAuth';
import PortfolioForm from '../../components/portfolioForm';
import {useCreatePortfolio} from '../../actions/portfolio';
import {useRouter}  from 'next/router';
import { Row, Col } from 'reactstrap';

const PortfolioNew = ({ user, userLoading }) => {
    const router = useRouter();
    const [createPortfolio, {data, loading, error}] = useCreatePortfolio();

     if(data) { router.push('/portfolios') }

    return (
        <BaseLayout user={user} userLoading={userLoading}>
            <BasePage title="Create New Portfolio">
                <Row>
                    <Col>
                        <PortfolioForm onSubmit={createPortfolio} />
                        { error && 
                            <div className="alert alert-danger mt-3">{error}.<br/>
                                 "Title", "Tech Stack", "Image URL" and "Description" are required
                            </div>
                        }
                        { loading && 
                            <div className="spinner-border mt-3" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default WithAuth(PortfolioNew)('admin');