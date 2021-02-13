import { Container, Row } from 'reactstrap';

const Masthead = ({ imagePath, title, subTitle, button }) =>
  <div className="masthead" style={ imagePath && {"backgroundImage": `url(${imagePath})`} }>
    <div className="overlay"></div>
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{title}</h1>
            <span className="subheading">
              {subTitle}{button}
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </div>

export default Masthead;