import { useEffect, useState } from 'react';
import { API_URL } from '../api';

const useFetchProducts = () => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const dic = {
    "men's clothing": "blue",
    "jewelery": "red",
    "electronics": "green",
    "women's clothing": "pink",
  }

  return items?.map(i => {
    return {
      ...i, 
      color: dic[i.category] || "yellow"
    }
  })
};

export { useFetchProducts };
