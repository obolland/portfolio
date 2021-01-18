import BaseLayout from "../../components/layouts/BaseLayout";
import BasePage from '../../components/basePage';
import { useRouter } from 'next/router';
import axios from 'axios';

import { getUserProfile } from '../../actions/index';

const Portfolio = ({ post }) => {

  const { data, loading } = getUserProfile();

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>{post.title}</h1>
        <p>BODY: {post.body}</p>
        <p>ID: {post.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const posts = res.data

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is /posts/1, then params.id is 1
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = res.data

  // Pass post data to the page via props
  return { props: { post } }
}

export default Portfolio;