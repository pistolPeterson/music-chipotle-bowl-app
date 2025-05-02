import { useState } from 'react';

const requestParams = (body) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
    },
    body: JSON.stringify({
      input: body,
      model: 'gpt-4o',
      temperature: 1,
    }),
  };
};
export function usePostData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, body) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...requestParams(body),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
}
export default usePostData;
