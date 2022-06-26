import { useState, useCallback } from 'react';

const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState([]);

  const configureRequest = (method, body) => {
    const options = {};
    options['method'] = method;
    if (method === 'post') {
      options['headers'] = {
        'content-type': 'application/json',
        Accept: 'application/json',
      };
    } else {
      options['headers'] = { accept: 'application/json' };
    }

    options['body'] = body ? JSON.stringify(body) : null;
    return options;
  };

  const sendRequest = useCallback(
    async (url, method, body, addToExisting, cleanupFn) => {
      const options = configureRequest(method, body);

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (!response.ok) {
          setIsError(true);
          setErrorMessage(data);
        } else {
          if (addToExisting) {
            setData(prevData => [...prevData, ...data.data]);
          } else {
            setData(data.data);
          }
          setIsError(false);
          setErrorMessage(null);
          if (cleanupFn) cleanupFn();
        }
      } catch (err) {
        setIsError(true);
        setErrorMessage('Something Went Wrong');
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    isError,
    errorMessage,
    sendRequest,
    data,
    setData,
  };
};

export default useApiRequest;
