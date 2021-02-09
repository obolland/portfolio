import dbConnect from '../../../../db/mongoDBConnect';
import Portfolio from '../../../../db/models/portfolio';
import auth0 from '../../../../utils/auth0';

export default async function handleEditPortfolio(req, res) {
  await dbConnect();
  const { query: {id}, body } = req;

  const tokenCache = auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  switch (req.method) {
    case 'GET':
      const portfolioRes = await Portfolio.findById(id)
      res.json(portfolioRes)
    break

    case 'PUT':
      if (accessToken) {
        const updatedFolioRes = await Portfolio
        .findOneAndUpdate({_id: id}, body, {new: true, runValidators: true}) //new:true returns the updates portfolio
        return res.json(updatedFolioRes)
        } else { return }
    break
    case 'DELETE':
      if (accessToken) {
        const deleteFolioRes = await Portfolio.findByIdAndDelete(id)
        return res.json({message: 'Portfolio '+id+' has been successfully deleted'})
      } else { return }
    break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}

// note - portfolios uses PUT and blogs is using PATCH