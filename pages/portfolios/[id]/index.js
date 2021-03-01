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

  await dbConnect()
  const res = await Portfolio.find({})

  const paths = res.map(portfolio => ({
    params: { id: portfolio._id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  await dbConnect()
  const res = await Portfolio.findById(params.id)
  const parsedRes = JSON.parse(JSON.stringify(res))

  return { props: { folio: parsedRes } }
}

export default PortfolioId;