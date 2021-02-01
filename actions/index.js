import { useState } from 'react';
import { toast } from 'react-toastify';

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

      // toast.success('hello', {
      //   position: "top-center",
      //   autoClose: 2000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   });

      return json.data;
    } catch(err) {
      const errorMessage = (err.response && err.response.data) || "ooops...something went wrong!"
      setReqState({error: errorMessage, data: null, loading: false})
      return Promise.reject(errorMessage)
    }
  }
  return [handler, {...reqState}]
}