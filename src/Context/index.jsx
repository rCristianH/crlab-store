import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {

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

  //show product
  const [productToShow, setProductToShow] = useState({})

  //cart products
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
