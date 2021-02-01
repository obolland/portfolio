import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Redirect = ({ route, ssr }) => {
  const router = useRouter();

  useEffect(() => {
    if (ssr) {
      window.location.pathname = route;
    } else {
        router.push(route);
    }
  }, [])

  return null;
}

export default Redirect;

//note - can this be removed? Replace with Link or useRouter where necessary