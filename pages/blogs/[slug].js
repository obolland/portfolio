import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import dbConnect from '../../db/mongoDBConnect';
import Blog from '../../db/models/blogs';
import ReactHtmlParser, {  } from 'react-html-parser';
import { getUserProfile } from '../../actions/user';

const BlogDetail = ({blog}) => {
    const { data, userLoading } = getUserProfile();
    const html = blog.content

    return (
        <BaseLayout user={data} userLoading={userLoading}>
            <BasePage title={blog.title}>
              <div>
                { ReactHtmlParser(html) }
              </div>
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticPaths() {

  await dbConnect()
  const res = await Blog.find({})

  const paths = res.map(blog => ({
    params: { slug: blog.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  await dbConnect()
  const res = await Blog.findOne({slug: params.slug})
  const parsedRes = JSON.parse(JSON.stringify(res))
  return { props: {blog: parsedRes} } 
}

export default BlogDetail;