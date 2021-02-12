import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/basePage';
import { getUserProfile } from '../actions/user';
import dbConnect from '../db/mongoDBConnect';
import Blog from '../db/models/blogs';
import { Row, Col } from 'reactstrap';


const Blogs = ({ blogs }) => {
    const { data, userLoading } = getUserProfile();
    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage title="INTRIGUES, FINDINGS & OTHER STUFF">
                { 
                    blogs.map(blog => {
                        return (
                        <Row key={blog._id}>
                            <Col>
                                <h1>{blog.title}</h1>
                                <Row>
                                    <Col>
                                        <h4>{blog.subTitle}</h4>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        )
                    })
                }
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps(context) {
    await dbConnect()

    const res = await Blog.find({  }).sort({ createdAt: -1 })
    const blogs = JSON.parse(JSON.stringify(res))
    return { props: { blogs }, revalidate: 1 }
}


export default Blogs;