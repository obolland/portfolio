const mongoose = require('mongoose');
const Portfolio = mongoose.model('Portfolio');
import dbConnect from '../../../../db/mongoDBConnect';
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
        const updatedFolioRes = await Portfolio
        .findOneAndUpdate({_id: id}, body, {new: true, runValidators: true}) //new:true returns the updates portfolio
        return res.json(updatedFolioRes)
    break
    case 'DELETE':
        const deleteFolioRes = await Portfolio.findByIdAndDelete(id)
        return res.json({message: 'Portfolio '+id+' has been successfully deleted'})
    break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}

// note - portfolios uses PUT and blogs is using PATCH