import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/basePage";
import { Row, Col } from "reactstrap";

import { getUserProfile } from "../actions/user";

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
              <p>
                Hi, I'm Olly. A passionate and enthusiastic Software Engineer,
                with a focus on front-end Javascript development. I'm currently
                working as part of a team to develop analytical and highly
                customisable user facing data visualisation software to provide
                crucial insights and state of the art 3 dimensional interactive
                visualisations to sport analysts, coaches and the media.
              </p>
            </div>
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
