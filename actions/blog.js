import axios from 'axios';
import { useAPIHandler } from './index';

const createBlog = (data) => {
  return axios.post('/api/v1/blogs', data)
}

export const useCreateBlog = () => {
  return useAPIHandler(createBlog)
}