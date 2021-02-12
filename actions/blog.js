import axios from 'axios';
import { useAPIHandler } from './index';
import useSWR from 'swr';
import { fetcher } from './index';

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

export const useGetBlogs = () => {
  const { data, error, ...other } = useSWR(`/api/v1/blogs`, fetcher);
  return {data, error, blogsLoading: !data && !error, ...other}
}