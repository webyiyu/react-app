import { useCallback, useState } from 'react';

export default function useAsync(asyncFunction) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const execute = useCallback(() => {
    setData([]);
    setLoading(true);
    setError('');
    return asyncFunction()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [asyncFunction]);
  return {
    execute,
    data,
    error,
    loading,
  };
}
