import axios from 'axios';
import { useAPIHandler } from './index';
import useSWR from 'swr';
import { fetcher } from './index';


const createPortfolio = (data) => {
  return axios.post('/api/v1/portfolios', data)
}

export const useCreatePortfolio = () => {
  return useAPIHandler(createPortfolio)
}

// export const useGetPortfolio = (id) => {
//   const { data, error, ...other } = useSWR(`/api/v1/portfolios/${id}`, fetcher);
//   return {data, error, userLoading: !data && !error, ...other}
// }