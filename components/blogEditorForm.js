import React, { useRef, useState }from 'react';
import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const BlogEditorForm = ({saveBlog, initialData, updateBlog }) => {
  const [blogContent, setBlogContent] = useState('')
  const editorRef = useRef();
    // useEffect(() => {
    //     // Get underlining core object here
    //     // useEffect is being used to make sure the editor is first being rendered.
    //     console.log(editorRef.current.editor.core);
    // }, []);

    const defaultData = {
      content: '',
      title: '',
      subTitle: '',
      slug: '',
    }

    const formData = initialData ? {...initialData} : defaultData

    const [form, setForm] = useState(formData)

    const hasContentOnLoad = formData.title ? true : false
    
    const handleEditorChange = (content) => {
      setBlogContent(content)
    }

    const handleInputChange = (event) => {
      const { name, value } = event.target
      setForm({...form, [name]: value})
    }

    const handleSubmit = (blogContent, form, event) => {  //checking to see if there was already
      if(hasContentOnLoad){                             //data in the editor upon loading so we know
          updateBlog(blogContent, form, event)        //whether or not to save a new blog or update existing
      } else {
          saveBlog(blogContent, form, event)
      }
    }

  return (
        <form>
          <SunEditor
            setContents={form.content ? form.content : null}
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
          <button onClick={(event) => handleSubmit(blogContent, form, event)}
            type="submit"
            name="draft"
            className="btn btn-primary mt-4 mr-2">Save as Draft
          </button>
          <button onClick={(event) => handleSubmit(blogContent, form, event)}
            type="submit"
            name="publish"
            className="btn btn-primary mt-4">Publish Blog
          </button>
        </form>
  );
};
export default BlogEditorForm;