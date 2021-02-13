import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useUpdateBlog, deleteBlog, useGetBlogs } from '../actions/blog';
import Masthead from '../components/shared/Masthead';
import PortDropdown from '../components/shared/Dropdown';
import { toast } from 'react-toastify';

const Dashboard = ({user, userLoading}) => {
  const [updateBlog] = useUpdateBlog();
  const {data: blogs = [], blogsLoading, mutate} = useGetBlogs();
  const buttonProps = { href: '/blogs/editor', text: 'Create a new Blog'}

  const changeBlogStatus = async (id, status) => {
    updateBlog(id, {status})
    .then(() => mutate())     //mutate come from SWR and simply re-fetches the data
    .catch(() => toast.error('Oops, something went wrong...'))
  }

  // note - add an 'are you sure you want to delete this blog?'
  const _deleteBlog = (id) => {
    deleteBlog(id)
    .then(() => mutate())
    .catch(() => toast.error('Oops, something went wrong...'))
  }

  const createOption = (blogStatus) => {
    return blogStatus === 'draft' ? {view: 'Publish Blog', value: 'published'}
                                  : {view: 'Move to drafts', value: 'draft'}
  }

  const createOptions = (blog) => {
    const option = createOption(blog.status)

    return [
      {key: `${blog._id}-publish`,
      text: option.view,
      handlers: {
        onClick: () => {changeBlogStatus(blog._id, option.value)}}
      },
      {key: `${blog._id}-delete`,
      text: 'Delete',
      handlers: {
        onClick: () => {_deleteBlog(blog._id)}}
      },
    ]
  }
  
  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      { !blogsLoading && blogs.filter(blog => blog.status === status).map(blog =>
        <li key={blog._id}>
          <Link href={`/blogs/editor/${blog._id}`}>
            <a>{blog.title}</a>
          </Link>
          <PortDropdown items={createOptions(blog)} />
        </li>
        )
      }
    </ul>
  )

  return (
    <BaseLayout navClass="transparent" user={user} userLoading={userLoading}>
      <Masthead
          imagePath="/images/home-bg.jpg"
          title="Blogs Dashboard"
          subTitle='Olly, write something good today'
          buttonProps={buttonProps}
      />
      <BasePage className="blog-user-page">
        <Row>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Published Blogs </h2>
            { !blogsLoading ?
              renderBlogs(blogs, status="published")
                            :
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            { !blogsLoading ?
              renderBlogs(blogs, status="draft")
                            :
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
  }

  // export async function getStaticProps(context) {
  //   await dbConnect()

  //   const res = await Blog.find({})
  //   const blogs = JSON.parse(JSON.stringify(res))   //next cannot serialize response from MongoDB
  //   return { props: { blogs }, revalidate: 1 }      //so I stringify and re-parse it which sorts it
  // }

export default WithAuth(Dashboard)('admin');