import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';  // Importa el hook de localStorage
import { IdeapadList } from './API/Ideapad';


/**
 * Custom Hook para obtener productos desde una API y almacenarlos en localStorage.
 * Si no hay conexión a internet, se utilizan los datos almacenados localmente.
 * 
 * @returns {{ items: Array|null, error: string|null }} - Un objeto que contiene:
 * - `items`: Un array de productos con un campo adicional `color` basado en su categoría, o `null` si no se han cargado.
 * - `error`: Un mensaje de error si hubo un problema al intentar recuperar los datos.
 */

const useFetchProducts = () => {
  // Usa localStorage para almacenar y leer los productos
  const [items, setItems] = useLocalStorage('products', null);




  const [error, setError] = useState(null);

  useEffect(() => {
    const spreadArray = [
      ...IdeapadList
    ]
    setItems(spreadArray)

    /* const fetchData = async () => {
      try {
        
        // Realiza la solicitud a la API
        const response = await fetch(`${API_URL}/products`) || null;
        console.log("Response", response);
 
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
          console.log("You are using the info from localStorage")
        }
 
        // Convierte la respuesta a JSON
        const json = await response.json();
        setItems(json);  // Almacena los productos en estado y localStorage
        setError(null);  // Reinicia el error en caso de éxito
      } catch (err) {
        setError('No internet connection, using cached data.'); // Mensaje de error
      }
    };
 
    fetchData(); */ // Llama a la función para obtener los datos
  }, []);


  return items;
};

export { useFetchProducts };