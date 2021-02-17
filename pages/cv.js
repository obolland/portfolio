import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/basePage';
import { Row, Col } from 'reactstrap';
import { getUserProfile } from '../actions/user';

const CV = () => {

    const { data, userLoading } = getUserProfile();

    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage title="CV">
            <Row>
                <Col md={{size: 10, offset: 1}}>
                    <iframe style={{width: '100%', height: '800px'}} src="/Olly_Bolland_CV.pdf"/>
                </Col>
            </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default CV;