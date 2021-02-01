
import { fetcher } from './index';

import useSWR from 'swr';

export const getUserProfile = () => {
  const { data, error, ...other } = useSWR('/api/v1/userProfile', fetcher);
  return {data, error, userLoading: !data && !error, ...other}
}

