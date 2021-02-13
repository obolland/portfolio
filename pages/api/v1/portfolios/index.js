import Portfolio from '../../../../db/models/portfolio'
import dbConnect from '../../../../db/mongoDBConnect';
import auth0 from '../../../../utils/auth0';

export default async function createPortfolioHandler(req, res) {
  await dbConnect()

  const tokenCache = auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  const portfolioData = req.body;
  const portfolio = new Portfolio(portfolioData)

  try {
    const newPortfolio = await portfolio.save();
    return res.json(newPortfolio)
  } catch (error) {
    return res.status(error.status || 422).json(error.response.data)

  }

}