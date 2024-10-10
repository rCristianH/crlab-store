/**
 * Contexto del carrito de compras que administra el estado y la lógica
 * relacionada con el manejo de productos, órdenes, detalles de productos,
 * búsquedas y la funcionalidad del carrito de compras.
 */

import { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../Service/useLocalStorage';  // Hook personalizado para manejar el almacenamiento local
import { useFetchProducts } from '../Service/useService';  // Hook personalizado para obtener productos de un servicio
import { getFilteredItems } from '../Utils/Filtered';  // Función para filtrar productos

// Creación del contexto del carrito de compras
const ShoppingCartContext = createContext();

/**
 * Proveedor del contexto del carrito de compras.
 * Proporciona el estado global relacionado con productos, detalles de producto, búsqueda y manejo del carrito.
 * 
 * @param {React.ReactNode} children - Los componentes que estarán dentro del proveedor.
 */
const ShoppingCartProvider = ({ children }) => {
  
  // Estado para manejar los productos obtenidos a través del hook personalizado
  const items = useFetchProducts();

  // Estado para manejar los productos filtrados
  const [filteredItems, setFilteredItems] = useState(null);

  // Estado para manejar el contador de productos en el carrito
  const [count, setCount] = useState(0);

  // Estado para abrir/cerrar el detalle de un producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  /**
   * Abre la vista de detalle del producto.
   */
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  /**
   * Cierra la vista de detalle del producto.
   */
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  // Estado para abrir/cerrar el carrito de compras
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);

  /**
   * Abre el carrito de compras.
   */
  const openProductCart = () => {
    setIsProductCartOpen(true);
  };

  /**
   * Cierra el carrito de compras.
   */
  const closeProductCart = () => {
    setIsProductCartOpen(false);
  };

  /**
   * Alterna la apertura/cierre del carrito de compras.
   */
  const toggleProductCart = () => {
    setIsProductCartOpen(!isProductCartOpen);
  };

  // Estado para manejar el producto a mostrar en detalle
  const [productToShow, setProductToShow] = useState({});

  // Estado para manejar los productos agregados al carrito
  const [cartProducts, setCartProducts] = useState([]);

  // Estado para manejar las órdenes del usuario utilizando almacenamiento local
  const [order, setOrder] = useLocalStorage("MyOrdersV1", []);

  // Estado para manejar el término de búsqueda ingresado por el usuario
  const [argSearch, setArgSearch] = useState(null);

  /**
   * Efecto que filtra los productos según el término de búsqueda.
   * Se ejecuta cada vez que cambian los productos o el argumento de búsqueda.
   */
  useEffect(() => {
    if (argSearch) {
      setFilteredItems(getFilteredItems(items, argSearch));
    }
  }, [items, argSearch]);

  return (
    <ShoppingCartContext.Provider
      value={{
        // Productos obtenidos
        items,
        // Contador del carrito
        count,
        setCount,
        // Detalles del producto
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        // Carrito de compras
        openProductCart,
        closeProductCart,
        toggleProductCart,
        isProductCartOpen,
        setIsProductCartOpen,
        // Producto a mostrar
        productToShow,
        setProductToShow,
        // Productos en el carrito
        cartProducts,
        setCartProducts,
        // Órdenes del usuario
        order,
        setOrder,
        // Búsqueda y productos filtrados
        argSearch,
        setArgSearch,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };