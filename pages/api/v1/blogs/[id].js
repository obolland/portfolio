
const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');
import dbConnect from '../../../../db/mongoDBConnect';
import auth0 from '../../../../utils/auth0';

export default async function handleEditBlog(req, res) {
  await dbConnect();
  const { query: {id}, body } = req;

  const tokenCache = auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  switch (req.method) {
    case 'GET':
      const blogRes = await Blog.findById(id)
      res.json(blogRes)
    break

    case 'PATCH':
      if (accessToken) {
        const updatedBlogRes = await Blog
        .findOneAndUpdate({_id: id}, body, {new: true, runValidators: true}) //new:true returns the updated blog
        return res.json(updatedBlogRes)
        } else { return }
    break
    case 'DELETE':
      if (accessToken) {
        const deleteBlogRes = await Blog.findByIdAndDelete(id)
        return res.json({message: 'Blog '+id+' has been successfully deleted'})
      } else { return }
    break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}