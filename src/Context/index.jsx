import { createContext, useState } from 'react';
import { useLocalStorage } from '../Service/useLocalStorage';
import { useFetchProducts } from '../Service/useService';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

  const items = useFetchProducts()

  //increment
  const [count, setCount] = useState(0);

  //open / close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  //toggle 
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const openProductCart = () => {
    setIsProductCartOpen(true)
  }
  const closeProductCart = () => {
    setIsProductCartOpen(false)
  }
  const toggleProductCart = () => {
    setIsProductCartOpen(!isProductCartOpen)
  }

  //show product
  const [productToShow, setProductToShow] = useState({})

  //cart products
  const [cartProducts, setCartProducts] = useState([])

  //my orders
  const [order, setOrder] = useLocalStorage("MyOrdersV1", [])

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        openProductCart,
        closeProductCart,
        toggleProductCart,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isProductCartOpen,
        setIsProductCartOpen,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
