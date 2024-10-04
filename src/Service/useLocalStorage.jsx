import { useState } from "react";
/**
 * Custom Hook para manejar valores almacenados en localStorage.
 * 
 * @param {string} key - La clave que se usará para almacenar y recuperar el valor de localStorage.
 * @param {*} initialValue - El valor inicial que se usará si no hay nada en localStorage para la clave dada.
 * @returns {[*, Function]} - Retorna un array con el valor almacenado y una función para actualizarlo.
 */

const useLocalStorage = (key, initialValue) => {
  
  /**
   * Función para leer el valor desde localStorage.
   * 
   * @returns {*} - Retorna el valor almacenado en localStorage, o el valor inicial si no se encuentra.
   */
  const readValueFromLocalStorage = () => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key: ${key}`, error);
      return initialValue;
    }
  };

  // Estado que almacena el valor obtenido de localStorage
  const [storedValue, setStoredValue] = useState(readValueFromLocalStorage);

  /**
   * Función para actualizar el valor en el estado y en localStorage.
   * 
   * @param {*} value - El nuevo valor o una función que retorne el nuevo valor basado en el valor anterior.
   */
  const setValue = (value) => {
    try {
      // Si el valor es una función, la ejecuta con el valor almacenado actual como argumento
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Actualiza el estado local
      setStoredValue(valueToStore);

      // Guarda el nuevo valor en localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage key:", error);
    }
  };

  // Retorna el valor almacenado y la función para actualizarlo
  return [storedValue, setValue];
};

export { useLocalStorage };