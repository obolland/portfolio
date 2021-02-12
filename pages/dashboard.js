import React, { useEffect } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useUpdateBlog } from '../actions/blog';
import Masthead from '../components/shared/Masthead';
import PortDropdown from '../components/shared/Dropdown';
import { useGetBlogs } from '../actions/blog';

const Dashboard = ({user, userLoading}) => {
  const [updateBlog, {data, error: errorUpdateBlog}] = useUpdateBlog();
  const {data: blogs, blogsLoading, mutate} = useGetBlogs();
  const buttonProps = { href: '/blogs/editor', text: 'Create a new Blog'}

  const changeBlogStatus = async (id, status) => {
    await updateBlog(id, {status})
    mutate()    //mutate come from SWR and simply re-fetches the data
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
        onClick: () => {alert(`Clicking Delete! ${blog._id}`)}}
      },
    ]
  }

  const renderBlogs = (blogs, status) => (
    <ul className="user-blogs-list">
      { blogs && blogs.filter(blog => blog.status === status).map(blog =>
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
            { !blogsLoading &&
            renderBlogs(blogs, status="published")
            }
          </Col>
          <Col md="6" className="mx-auto text-center">
            <h2 className="blog-status-title"> Draft Blogs </h2>
            { !blogsLoading &&
            renderBlogs(blogs, status="draft")
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