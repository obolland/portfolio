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
                            <h4 className={`subtitle fadein`}>To my space</h4>
                            <p className={`subsubTitle fadein`}>Feel free to read this short description about me</p>
                        </div>
                    </Col>
                    <Col md="6">
                        <div className={`fadein right-side`}>
                            <p>My name is Olly Bolland and I am an experienced <i>enthusiastic</i> software engineer and freelance developer. </p>
                            <p>
                            I have a Master's degree in Artificial Intelligence and several years of experience working
                            on a wide range of technologies and projects from C++ development for ultrasound devices to
                                modern mobile and web applications in React and Angular.
                            </p>
                            <p>
                            Throughout my career, I have acquired advanced technical knowledge and the ability to explain
                            programming topics clearly and in detail to a broad audience. I invite you to take my course,
                            where I have put a lot of effort to explain web and software engineering concepts in a detailed,
                            hands-on and understandable way.
                            </p>
                        </div>
                    </Col>
                </Row>
            </BasePage>
        </BaseLayout>
    )
}

export default About;