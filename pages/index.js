import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import BaseLayout from 'components/layouts/BaseLayout';
import { getUserProfile } from 'actions/user';
import Contact from 'components/contact';
import SVG from 'components/svgComponent';
import ScrollDown from 'components/scrollDown';
import { Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';
import linearGradient from 'SVG-gradients/linearGradients';
import Link from 'next/link';

const ROLES = ['Developer', 'Team Player', 'Innovator', 'Collaborator', 'Communicator', 'Creative'];


const Index = () => {
  const { data, userLoading } = getUserProfile();
  const [isFlipping, setIsFlipping] = useState(false)
  const flipInterval = useRef()


  useEffect(() => {
    animate();
    return () => flipInterval && clearInterval(flipInterval.current)  //clean up interval when component is dismounted
  }, [])

  const animate = () => {
    flipInterval.current = setInterval(() => {
      setIsFlipping(prevIsFlipping => !prevIsFlipping)
    }, 200000000)
  }

  const flipCard = () => {
    setIsFlipping(!isFlipping)
  }

  return (
    <>
    <BaseLayout
      user={data}
      userLoading={userLoading}
      navClass="transparent"
      className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}>
      <Head>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      </Head>
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container fluid>
          <Row >
            <Col md="6">
              <div className="hero-section" onClick={flipCard}>
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Web Applications Developer </h2>
                      <div className="hero-section-content-intro">
                        <span class="iconify" id="card-flip-click" data-icon="clarity:cursor-hand-click-line" data-inline="false"></span>
                      </div>
                    </div>
                    <img className="image" src="/images/section-1.png"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> React, NextJS, Express, MongoDB </h2>
                      <div className="hero-section-content-intro">
                        Javascript is my langauge, React is my playground
                      </div>
                    </div>
                    <img className="image" src="/images/section-2.png"/>
                    <div className="shadow-custom shadow-custom-orange">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  <span className='fadein name'>Hi, <b>I'm Olly.</b><br /></span>
                  <span className='fadein info'>Get up to date information, collaborate and discover new projects I'm working on!</span>
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
                <h1 className='fadein work'>
                  Take a look at my <Link href='/portfolios'>work.</Link>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    <ScrollDown />
    </BaseLayout>
    <SVG linearGradient={ isFlipping ? linearGradient.gradient2 : linearGradient.gradient1}/>
    <Contact />
    </>
  )
}

export default Index