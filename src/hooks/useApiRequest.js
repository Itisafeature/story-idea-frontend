import { useState, useCallback } from 'react';

const useApiRequest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(null);

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
          setErrorCount(prevErrorCount => prevErrorCount + 1);
        } else {
          if (addToExisting) {
            setData(prevData => [...prevData, ...data.data]);
          } else {
            setData(data.data);
          }

          if (data.meta) {
            setTotalCount(data.meta.total_count);
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
    [] // useCallback dependency array
  );

  return {
    isLoading,
    isError,
    errorMessage,
    errorCount,
    sendRequest,
    data,
    setData,
    totalCount,
  };
};

export default useApiRequest;
