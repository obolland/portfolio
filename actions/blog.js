import axios from 'axios';
import { useAPIHandler } from './index';

const createBlog = (data) => {
  return axios.post('/api/v1/blogs', data)
}

const updateBlog = (id, data) => {
  return axios.patch(`/api/v1/blogs/${id}`, data)
}

export const useCreateBlog = () => {
  return useAPIHandler(createBlog)
}

export const useUpdateBlog = () => {
  return useAPIHandler(updateBlog)
}