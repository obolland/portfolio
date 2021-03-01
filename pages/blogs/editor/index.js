import 'suneditor/dist/css/suneditor.min.css';
import BaseLayout from 'components/layouts/BaseLayout';
import BasePage from 'components/basePage';
import WithAuth from 'hoc/withAuth';
import { useCreateBlog } from 'actions/blog';
import { toast } from 'react-toastify';
import BlogEditorForm from 'components/blogEditorForm';
import { useRouter } from 'next/router';

const BlogEditor = ({user, userLoading}) => {
  const Router = useRouter()
  const [createBlog, {data: createdBlog, error}] = useCreateBlog()

  const saveBlog = async (blogContent, form, event) => {
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

      await createBlog(data)
      
    } else {
      const data = {
        ...form,
        content: blogContent
      }
      await createBlog(data)
    }

  }


  if (error) {
    toast.error(error.message)
  }

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage title="NEW BLOG POST...">
        <BlogEditorForm saveBlog={saveBlog} />
      </BasePage>
    </BaseLayout>
  );
};
export default WithAuth(BlogEditor)('admin');





























