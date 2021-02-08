import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/basePage';
import WithAuth from '../../../hoc/withAuth';
import { updateBlog } from '../../../actions/blog';
import { useRouter } from 'next/router';
import PortfolioForm from '../../../components/portfolioForm';
import { toast } from 'react-toastify';
import BlogEditorForm from '../../../components/blogEditorForm';


const BlogUpdate = ({ user, userLoading }) => {
  const router = useRouter()
  const [data, setData] = useState()
  const {id} = router.query
  
  // NextJS returns an undefined query object on first render. This ensures that fetch isn't called
  // until query id is defined.
  useEffect(() => {
    if(!id) {
      return;
    }
    const fetchBlogById = async () => {
      const response = await fetch(`/api/v1/blogs/${id}`)
      const resData = await response.json()
      setData(resData)
    }
    fetchBlogById()
  }, [id])


  // const updateBlog = async (data) => { 
  //   try {
  //     const res = await axios.put(`/api/v1/blogs/${id}`, data)
  //     if (res) {
  //       toast.success('Blog Updated', {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //     }
  //   } catch (e){
  //     toast.error(e.response.data+'. Required fields are marked with an asterix', {
  //       position: "top-center",
  //       autoClose: false,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       });
  //   }

  // }

  return (
      <BaseLayout user={user} userLoading={userLoading}>
          <BasePage title="Update Blog" className="portfolio-page">
            { data && data.content ?
              <BlogEditorForm initialData={data} />
              :
              <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
              </div>
            }
          </BasePage>
      </BaseLayout>
  )
}
export default WithAuth(BlogUpdate)('admin');