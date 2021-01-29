import mongoose from 'mongoose';
const { Schema } = mongoose;

/* PortfolioSchema will correspond to a collection in your MongoDB database. */
const PortfolioSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please provide a name for this porfolio item.'],
    maxlength: [128, 'Title cannot be more than 128 characters'],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for this portfolio item"]
  },
  tech_stack: {
    type: String,
    required: [true, "Please provide details of tech stack used"]
  },
  job_title: {
    type: String,
    required: false,
    maxlength: [128, 'Job title cannot be more than 128 characters']
  },
  company: {
    type: String,
    required: false,
    maxlength: [64, 'Company name cannot be more than 64 characters']
  },
  company_website: {
    type: String,
    required: false,
    maxlength: [128, 'Company website cannot be more than 128 characters']
  },
  img_url: {
    required: [true, 'Please provide an image url for this portfolio item.'],
    type: String,
  },
  start_date: {
    type: Date,
    required: false
  },
  end_date: {
    type: Date,
    required: false
  },
  detail_imgs: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.models.Portfolio || mongoose.model('Portfolio', PortfolioSchema)