import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/basePage';
import { Row, Col } from 'reactstrap';

import { getUserProfile } from '../actions/user';

const About = () => {

    const { data, userLoading } = getUserProfile();
    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage title="" className="about-page">
                <Row className="mt-5">
                    <Col md="6">
                        <div className="left-side">
                            <h1 className={`title fadein`}>Hello, Welcome</h1>
                            <h1 className={`subtitle fadein`}>To my space</h1>
                            {/* <p className={`subsubTitle fadein`}>Feel free to read this short description about me</p> */}
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`fadein right-side`}>
                            <p>My name is Olly and I am an <b>enthusiastic</b> web applications and freelance developer.</p>
                            <p>
                            I have several years experience with Javascript, working with a range of technologies and on various projects,
                            from vinilla JS landing pages to modern web applications in React and NextJS.
                            </p>
                            <p>
                            I am <b>excited</b> to learn, <b>eager</b> to move forwards and intend to remain <b>inquisitive</b> as I progress.<br/>
                            I can't wait to take the next step in my career and grow into the best developer I can be.
                            </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default About;