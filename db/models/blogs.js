import mongoose from 'mongoose';
const { Schema } = mongoose;

/* PortfolioSchema will correspond to a collection in your MongoDB database. */
const BlogSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    sparse: true,
    required: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title for this blog.']
  },
  subTitle: {
    type: String,
    required: [true, 'Please provide a sub-title for this blog.']
  },
  content: {
    type: String,
    required: [true, "Please provide content for this blog"]
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'published']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);