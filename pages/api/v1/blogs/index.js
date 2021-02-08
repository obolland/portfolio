const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');
import auth0 from '../../../../utils/auth0';

export default async function createBlogHandler(req, res) {

const tokenCache = auth0.tokenCache(req, res);
const { accessToken } = await tokenCache.getAccessToken();

// if (accessToken) {
  const blogData = req.body;
  const blog = new Blog(blogData)

  try {
    const newBlog = await blog.save();
    return res.json(newBlog)
  } catch (error) {
    return res.status(error.status || 422).send(error)

  }
// } else {
//   return res.json({error: "You are not authorised to post on this route"})
// }

}

// note - display correct error when user does not have access token