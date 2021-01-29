import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

import Link from 'next/link';

const PortfolioCards = ({portfolios}) => {
  
  return (
    <Row>
      <Col md="12">
        { portfolios.map(portfolio => 
        <Link key={portfolio._id} href={`/portfolios/${portfolio._id}`}>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">{portfolio.title}</CardHeader>
                <CardBody>
                    <img className="portfolio-card-img img-fluid" src={portfolio.img_url} />
                    <CardTitle className="portfolio-card-tech">{portfolio.tech_stack}</CardTitle>
                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
              </CardBody>
            </Card>
          </Link>
          )
        }
      </Col>
    </Row>
  )
}

export default PortfolioCards;