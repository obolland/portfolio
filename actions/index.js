import { useState } from 'react';

export const fetcher = (url) => fetch(url).then(res => res.json());

export const useAPIHandler = (apiCall) => {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false
  });

  const handler = async (...data) => {
    setReqState({error: null, data: null, loading: true});
    try {
      const json = await apiCall(...data)
      setReqState({error: null, data: json.data, loading: false})

      return json.data;
    } catch(err) {
      const errorMessage = (err.response && err.response.data) || "ooops...something went wrong!"
      setReqState({error: errorMessage, data: null, loading: false})
      return Promise.reject(errorMessage)
    }
  }
  return [handler, {...reqState}]
}