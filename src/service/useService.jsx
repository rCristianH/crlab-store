import { useEffect, useState } from 'react';
import { API_URL } from '../api';

const useFetchProducts = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);
  return items;
};

export { useFetchProducts };
