/**
 * Página principal de la aplicación de carrito de compras.
 * Muestra una lista de productos y permite la búsqueda en tiempo real.
 * 
 * Importa componentes reutilizables como `Card`, `Layout` y `ProductDetail`,
 * y utiliza el contexto de `ShoppingCartContext` para acceder a los productos y la funcionalidad de búsqueda.
 */

import { useContext, useState } from 'react';
import { Card } from '../../Components/Card';  // Componente para mostrar información de un producto individual
import { Layout } from '../../Components/Layout';  // Componente para el diseño principal de la página
import { ProductDetail } from '../../Components/ProductDetail';  // Componente para mostrar detalles de un producto seleccionado
import { ShoppingCartContext } from '../../Context';  // Contexto del carrito de compras

/**
 * Componente `Home` que representa la página de inicio.
 * Permite la búsqueda de productos y muestra la lista de productos filtrados o completos.
 */
const Home = () => {
  // Accede a `items` (todos los productos), `setArgSearch` (para filtrar), y `filteredItems` (productos filtrados) desde el contexto
  const { items, setArgSearch, filteredItems } = useContext(ShoppingCartContext);
  console.log("🧪 ~ Home ~ items:", items)
  
  // Estado local para controlar si la búsqueda está activa o no
  const [searchMode, setSearchMode] = useState(false);
  
  if(!items || items.length === 0){
    return <p>Cargondo productos</p>
  }

  const allItems = [...items[0]["SLIM3"],...items[0]["SLIM5"]]
  /**
   * Manejador para cambios en el campo de búsqueda.
   * Actualiza el término de búsqueda y activa el modo de búsqueda si hay un texto ingresado.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - Evento del input de búsqueda
   */
  const handleSearchChange = (e) => {
    const arg = e.target.value;
    setArgSearch(arg);  // Actualiza el término de búsqueda en el contexto
    setSearchMode(arg !== "");  // Activa el modo de búsqueda si hay un término
  };

  /**
   * Limpia el campo de búsqueda y desactiva el modo de búsqueda.
   */
  const clearSearch = () => {
    setArgSearch("");  // Limpia el término de búsqueda
    setSearchMode(false);  // Desactiva el modo de búsqueda
  };

  /**
   * Renderiza los productos en base a la lista proporcionada.
   * Si no hay productos o no se encuentran resultados, muestra un mensaje de error.
   * 
   * @param {Array} itemsList - Lista de productos a renderizar
   * @returns {JSX.Element} - Lista de componentes `Card` o un mensaje de error
   */
  
  const renderItems = (itemsList) => {
    if (!itemsList || itemsList.length === 0) {
      return <p className='font-semibold' onClick={clearSearch}>Opps, Nothing found!!</p>;  // Muestra mensaje si no hay resultados
    }
    return itemsList?.map((item) => (
      <Card key={item.id} data={item} />  // Renderiza cada producto usando el componente `Card`
    ));
  };

  return (
    <Layout>
      {/* Barra de búsqueda */}
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <input
          id="search-input"
          name="search"
          className='placeholder-gray-600 bg-gray-200 h-12 w-96 p-4 rounded-full'
          type='text'
          placeholder='What are you looking for today?'
          onChange={handleSearchChange}  // Actualiza la búsqueda en tiempo real
        />
      </div>
      
      {/* Lista de productos */}
      <div className="mt-5 grid gap-4 grid-cols-4 justify-items-center w-full max-w-screen-lg max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {searchMode ? renderItems(filteredItems) : renderItems(allItems)}  
      </div>
      
      {/* Detalle del producto
      <ProductDetail /> */}
    </Layout>
  );
};

export { Home };