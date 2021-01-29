import axios from 'axios';
import { useAPIHandler } from './index';

const createPortfolio = (data) => {
  return axios.post('/api/v1/portfolios', data)
}

export const useCreatePortfolio = () => {
  return useAPIHandler(createPortfolio)
}