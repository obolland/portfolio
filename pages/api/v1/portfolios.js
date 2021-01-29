const mongoose = require('mongoose');
const Portfolio = mongoose.model('Portfolio');
import auth0 from '../../../utils/auth0';

export default async function createPortfolioHandler(req, res) {

const tokenCache = auth0.tokenCache(req, res);
const { accessToken } = await tokenCache.getAccessToken();

if (accessToken) {
  const portfolioData = req.body;
  const portfolio = new Portfolio(portfolioData)

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio)
  } catch (error) {
    return res.status(error.status || 422).json(error.response.data)

  }
} else {
  return res.json({error: "You are not authorised to post on this route"})
}

}