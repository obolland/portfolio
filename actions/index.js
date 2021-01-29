import { useState } from 'react';

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
    } catch(err) {
      console.log(err.response)
      const errorMessage = (err.response && err.response.data) || "ooops...something went wrong!"
      setReqState({error: errorMessage, data: null, loading: false})
    }
  }
  return [handler, {...reqState}]
}