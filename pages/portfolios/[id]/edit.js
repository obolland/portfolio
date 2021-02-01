import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/basePage';
import WithAuth from '../../../hoc/withAuth';
import router from 'next/router';
import PortfolioForm from '../../../components/portfolioForm';
import { toast } from 'react-toastify';


const PortfolioEdit = ({ user, userLoading }) => {
  const [data, setData] = useState(null)
  const {id} = router.query
  
  // NextJS returns an undefined query object on first render. This ensures that fetch isn't called
  // until query id is defined.
  useEffect(() => {
    if(!id) {
      return;
    }
    const fetchPortfolioById = async () => {
      const response = await fetch(`/api/v1/portfolios/${id}`)
      const data = await response.json()
      setData(data)
    }
    fetchPortfolioById()
  }, [id])

  const updatePortfolio = async (data) => { 
    try {
      const res = await axios.put(`/api/v1/portfolios/${id}`, data)
      if (res) {
        toast.success('Portfolio Updated', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      }
    } catch (e){
      toast.error(e.response.data+'. Required fields are marked with an asterix', {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

  }

  return (
      <BaseLayout user={user} userLoading={userLoading}>
          <BasePage title="Edit Portfolio" className="portfolio-page">
            { data ?
              <PortfolioForm initialData={data} onSubmit={updatePortfolio} />
              :
              <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
              </div>
            }
          </BasePage>
      </BaseLayout>
  )
}
export default WithAuth(PortfolioEdit)('admin');