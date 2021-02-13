import React, {useEffect, useState, useRef} from 'react';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/basePage';
import WithAuth from '../../../hoc/withAuth';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import BlogEditorForm from '../../../components/blogEditorForm';
import { useUpdateBlog } from '../../../actions/blog';


const BlogUpdate = ({ user, userLoading }) => {
  const [updateBlog, {error}] = useUpdateBlog()
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

  const _updateBlog = async (blogContent, form, event) => {
    if(!blogContent){
      event.preventDefault()
      toast.error("You haven't written any content")
      return
    }

    if(event.target.name === 'publish') {
      const data = {
        ...form,
        status: 'published',
        content: blogContent
      }
      await updateBlog(id, data)

    } else {
      const data = {
        ...form,
        content: blogContent
      }
      await updateBlog(id, data)
    }

    alert('blog updated')  
  }


  if (error) {
    toast.error(error.message)
  }

  return (
      <BaseLayout user={user} userLoading={userLoading}>
          <BasePage title="Update Blog" className="portfolio-page">
            { data && data.content ?
              <BlogEditorForm initialData={data} updateBlog={_updateBlog}/>
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

// note - stick the get function into actions and import it