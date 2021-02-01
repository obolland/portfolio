import { Row, Col, Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import Link from 'next/link';
import { isAuthorised } from '../utils/auth0';
import axios from 'axios';
import { toast } from 'react-toastify';

const PortfolioCards = ({portfolios, user, userLoading}) => {

  const deletePortfolio = async (id) => {
    const response = await axios.delete(`/api/v1/portfolios/${id}`)
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

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
                    { !userLoading && user.name && isAuthorised(user, 'admin') ?
                        <>
                          <Link href={`/portfolios/${portfolio._id}/edit`}>
                              <Button
                              color="warning"
                              className="mr-2">Edit</Button>
                          </Link>
                          <Button
                            onClick={(e) => { e.stopPropagation(); deletePortfolio(portfolio._id)}}
                            color="danger" >Delete</Button>
                        </>
                        : null
                     }
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