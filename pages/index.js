import Head from 'next/head';

import BaseLayout from '../components/layouts/BaseLayout';
import { getUserProfile } from '../actions/user';

import { Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';

const ROLES = ['Developer', 'Team Player', 'Innovator', 'Collaborator', 'Communicator', 'Creative'];

const Index = () => {

  const { data, userLoading } = getUserProfile();

  return (
    <BaseLayout
      user={data}
      userLoading={userLoading}
      navClass="transparent"
      className="cover">
      <Head>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> React.js Developer </h2>
                      <div className="hero-section-content-intro">
                        Take a look at my portfolio and CV
                      </div>
                    </div>
                    <img className="image" src="/images/section-1.png"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Hi, <b>I'm Olly.</b><br />
                  Get up to date information, collaborate and discover new projects I'm working on!
                </h1>
              </div>
              <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={ROLES}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
              <div className="hero-welcome-bio">
                <h1>
                  Let's take a look at my work.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  )
}

export default Index