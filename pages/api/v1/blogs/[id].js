import dbConnect from '../../../../db/mongoDBConnect';
import Blog from '../../../../db/models/blogs';
import auth0 from '../../../../utils/auth0';

export default async function handleEditBlog(req, res) {
  await dbConnect();
  const { query: {id}, body } = req;

  const tokenCache = auth0.tokenCache(req, res);
  const { accessToken } = await tokenCache.getAccessToken();

  switch (req.method) {
    case 'GET':
      //await dbConnect();
      const blogRes = await Blog.findById(id)
      res.json(blogRes)
    break

    case 'PUT':
      if (accessToken) {
        //await dbConnect();
        const updatedBlogRes = await Blog
        .findOneAndUpdate({_id: id}, body, {new: true, runValidators: true}) //new:true returns the updated blog
        return res.json(updatedBlogRes)
        } else { return }
    break
    case 'DELETE':
      if (accessToken) {
        //await dbConnect();
        const deleteBlogRes = await Blog.findByIdAndDelete(id)
        return res.json({message: 'Blog '+id+' has been successfully deleted'})
      } else { return }
    break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}