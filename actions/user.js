
import useSWR from 'swr';

export const fetcher = (url) => fetch(url).then(res => res.json());

export const getUserProfile = () => {
  const { data, error, ...other } = useSWR('/api/v1/userProfile', fetcher);
  return {data, error, userLoading: !data && !error, ...other}
}

