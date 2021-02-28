import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button } from 'reactstrap';
import { isAuthorised } from '../utils/auth0';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

//window not available in a Node.js environment, so import has to be required only on client side
//which is what ssr: false handles.
const Carousel = dynamic(() =>
  import('3d-react-carousal').then((mod) => mod.Carousel), {
    ssr: false
  });


const CoverFlow = ({ portfolios, user, userLoading }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true)
  }, [])

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

  let slides = portfolios.map(portfolio => 
    <div key={portfolio._id}>
      <Link href={`/portfolios/${portfolio._id}`}>
          <div className="portfolio-card">
            <img className='img-fluid portfolio-card-img' src={portfolio.img_url} />
            <span className='portfolio-card-tech'>{portfolio.tech_stack}</span>
            <p className='portfolio-card-text'>{portfolio.description}</p>
            { !userLoading && user.name && isAuthorised(user, 'admin') &&
                <div className='portfolio-card-buttons'>
                  <Link href={`/portfolios/${portfolio._id}/edit`}>
                      <Button
                      color="warning"
                      className="mr-2">Edit
                      </Button>
                  </Link>
                  <Button
                    onClick={(e) => { e.stopPropagation(); deletePortfolio(portfolio._id)}}
                    color="danger">Delete
                  </Button>
                </div>
            }
          </div>
      </Link>
    </div> 
  )


  return (
    <div>
      <Head>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossOrigin="anonymous"
          />
      </Head>
      { hasMounted &&
          <Carousel slides={slides} />
      }
    </div>
  )
}

export default CoverFlow;