import BaseLayout from "../../../components/layouts/BaseLayout";
import BasePage from '../../../components/basePage';
import dbConnect from '../../../db/mongoDBConnect';
import Portfolio from '../../../db/models/portfolio';
import { getUserProfile } from '../../../actions/user';

const PortfolioId = ({ folio }) => {

  const { data, userLoading } = getUserProfile();

  return (
    <BaseLayout user={data} userLoading={userLoading}>
      <BasePage>
        <h1>{folio.title}</h1>
        <p>{folio.description}</p>
        { folio.detail_imgs ? <img src={folio.detail_imgs[0]} /> : null }
      </BasePage>
    </BaseLayout>
  )
}

export async function getStaticPaths() {

  //Call DB
  await dbConnect()
  const res = await Portfolio.find({})
  const parsedRes = JSON.parse(JSON.stringify(res))

  // Get the paths to pre-render based on portfolios
  const paths = parsedRes.map(portfolio => ({
    params: { id: portfolio._id.toString() },
  }))

  // Pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id` as defined in getStaticPaths.
  // If the route is /posts/1, then params.id is 1
  const res = await Portfolio.findById(params.id).lean()
  const parsedRes = JSON.parse(JSON.stringify(res))
  // Pass post data to the page via props
  return { props: { folio: parsedRes } }
}

export default PortfolioId;