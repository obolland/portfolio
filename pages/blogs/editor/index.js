import React, { useRef, useEffect, useState }from 'react';
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/basePage';
import WithAuth from '../../../hoc/withAuth';
import { useCreateBlog } from '../../../actions/blog';
import { toast } from 'react-toastify';

const BlogEditor = ({user, userLoading}) => {
  const [createBlog, {data: createdBlog, error}] = useCreateBlog()
  const [blogContent, setBlogContent] = useState('')
  const [form, setForm] = useState({
    title: '',
    subTitle: '',
    slug: '',
  })
  const editorRef = useRef();
    // useEffect(() => {
    //     // Get underlining core object here
    //     // useEffect is being used to make sure the editor is first being rendered.
    //     console.log(editorRef.current.editor.core);
    // }, []);
    
    const handleEditorChange = (content) => {
      setBlogContent(content)
    }

    const handleInputChange = (event) => {
      const { name, value } = event.target
      setForm({...form, [name]: value})
    }

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

      alert('blog created')  
    }


    if (error) {
      toast.error(error.message)
    }

  return (
    <BaseLayout user={user} userLoading={userLoading}>
      <BasePage title="NEW BLOG POST...">
        <form>
        {/* <form onSubmit={(event) => saveBlog(blogContent, form, event)}> */}
          <SunEditor
            width="100%"
            height="100vh"
            name="blog-editor"
            autoFocus={true}
            ref={editorRef}
            onChange={handleEditorChange}
            setOptions={{
              height: 200,
              buttonList: buttonList.complex
            }}/>
          <input
            required
            type="text"
            name="title"
            value={form.title}
            className="form-control mt-4"
            placeholder="Title"
            onChange={handleInputChange}
          />
          <input
            required
            type="text"
            name="subTitle"
            value={form.subTitle}
            className="form-control mt-3"
            placeholder="Subtitle"
            onChange={handleInputChange}
          />
          <input
            required
            type="text"
            name="slug"
            value={form.slug}
            className="form-control mt-3"
            placeholder="Slug"
            onChange={handleInputChange}
          />
          <button onClick={(event) => saveBlog(blogContent, form, event)}
            type="submit"
            name="draft"
            className="btn btn-primary mt-4 mr-2">Save as Draft
          </button>
          <button onClick={(event) => saveBlog(blogContent, form, event)}
            type="submit"
            name="publish"
            className="btn btn-primary mt-4">Publish Blog
          </button>
        </form>
      </BasePage>
    </BaseLayout>
  );
};
export default WithAuth(BlogEditor)('admin');





























