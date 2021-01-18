import BaseLayout from '../../components/layouts/BaseLayout';
import BasePage from '../../components/basePage';
import { getUserProfile } from '../../actions/index';

import Link from 'next/link';

import axios from 'axios';

const Portfolios = ({ posts }) => {

    const renderPosts = (posts) => {
        return (
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
                            <a>
                                {post.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    const { data, loading } = getUserProfile();

    return (
        <BaseLayout user={data} loading={loading}>
            <BasePage>
                <h1>Portfolios</h1>
                {renderPosts(posts)}
            </BasePage>
        </BaseLayout>
    )
}

export async function getStaticProps(context) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return { props: { posts: res.data.slice(0, 10) } }
}


export default Portfolios;