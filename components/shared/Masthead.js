import { Container, Row, Button } from 'reactstrap';
import Link from 'next/link'

const Masthead = ({imagePath, title, subTitle, buttonProps: {href, text}}) =>
  <div className="masthead" style={{"backgroundImage": `url(${imagePath})`}}>
    <div className="overlay"></div>
    <Container>
      <Row>
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{title}</h1>
            <span className="subheading">
              {subTitle}
              <Link href={href}>
                <Button color="primary" className="ml-2">{text}</Button>
              </Link>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </div>

export default Masthead;