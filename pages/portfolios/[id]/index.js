import BaseLayout from "components/layouts/BaseLayout";
import BasePage from 'components/basePage';
import dbConnect from 'db/mongoDBConnect';
import Portfolio from 'db/models/portfolio';
import { getUserProfile } from 'actions/user';

const PortfolioId = ({ folio }) => {
  const { data, userLoading } = getUserProfile();
  const imgs = folio.detail_imgs[0].split(',')

  return (
    <BaseLayout user={data} userLoading={userLoading}>
      <BasePage title={folio.title} className='portfolio-details'>
        <h5 className='mb-3'>{folio.tech_stack}</h5>
        <p className='mb-5'>{folio.description}<br/>
          <a href={folio.project_url} target="_blank">{folio.project_url}</a>
        </p>
        { folio.detail_imgs &&
        <>
          <img src={imgs[0]} className='mb-5'/>
          <img src={imgs[1]} className='mb-5'/>
          <img src={imgs[2]} className='mb-5'/>
          <img src={imgs[3]} className='mb-5'/>
          <img src={imgs[4]} className='mb-5'/>
          <img src={imgs[5]} className='mb-5'/>
          <img src={imgs[6]} className='mb-5'/>
          <img src={imgs[7]} />
        </>
        }
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