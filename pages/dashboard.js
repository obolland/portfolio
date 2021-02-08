import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import WithAuth from '../hoc/withAuth';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';
import Masthead from '../components/shared/Masthead';
import dbConnect from '../db/mongoDBConnect';
import Blog from '../db/models/blogs';

const Dashboard = ({user, userLoading, blogs}) => {
    const buttonProps = { href: '/blogs/editor', text: 'Create a new Blog'}

    const renderBlogs = (blogs, status) => (
      <ul className="user-blogs-list">
        { blogs.filter(blog => blog.status === status).map(blog =>
          <li key={blog._id}>
            <Link href={`/blogs/editor/${blog._id}`}>
              <a>{blog.title}</a>
            </Link>
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
              {renderBlogs(blogs, status="published")}
            </Col>
            <Col md="6" className="mx-auto text-center">
              <h2 className="blog-status-title"> Draft Blogs </h2>
              {renderBlogs(blogs, status="draft")}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }

  export async function getStaticProps(context) {
    await dbConnect()

    const res = await Blog.find({})
    const blogs = JSON.parse(JSON.stringify(res))   //next cannot serialize response from MongoDB
    return { props: { blogs }, revalidate: 1 }      //so I stringify and re-parse it which sorts it
  }

export default WithAuth(Dashboard)('admin');