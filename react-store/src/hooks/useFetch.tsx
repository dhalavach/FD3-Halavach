import { useState, useEffect } from 'react';
import axios from 'axios';

async function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// Usage in a component
// function ExampleComponent() {
//   const { data, loading, error } = useFetch('/api/data');

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

//   return <div>{JSON.stringify(data)}</div>;
// }
