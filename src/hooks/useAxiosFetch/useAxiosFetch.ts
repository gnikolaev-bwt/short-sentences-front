import axios from 'axios';
import { useEffect } from 'react';

export const useAxiosFetch = (
  url: string,
  {
    onFetched,
    onError
  }: {
    onFetched: (data: any) => void;
    onError: (error: any) => void;
  }
) => {
  useEffect(() => {
    const source = axios.CancelToken.source();
    (async () => {
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        onFetched(response.data);
      } catch (error) {
        onError(error);
      }
    })();
    return () => {
      source.cancel();
    };
  }, [url, onFetched, onError]);
};
