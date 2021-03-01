import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import BlogList from '../../components/blogList';
import { getUserProfile } from '../../actions/user';
import dbConnect from '../../db/mongoDBConnect';
import Blog from '../../db/models/blogs';
import { Row } from 'reactstrap';
import Masthead from '../../components/shared/Masthead'


const Blogs = ({ blogs }) => {
    const { data, userLoading } = getUserProfile();

    return (
      <BaseLayout
        navClass="transparent" className="blog-listing-page"
        user={data} userLoading={userLoading}>

        <Masthead 
          imagePath="/images/home-bg.jpg"
          title="My Blogs"
          subTitle='Intrigues, findings and rambles...'
        />
        
        <BasePage className="blog-body">
          <Row>
            <BlogList blogs={blogs}/>
          </Row>
        </BasePage>
      </BaseLayout>
    )
}

export async function getStaticProps(context) {
    await dbConnect()

    const res = await Blog.find({ status: 'published'}).sort({ createdAt: -1 })
    const blogs = JSON.parse(JSON.stringify(res))
    return { 
      props: { blogs },
      revalidate: 5
    }
}


export default Blogs;