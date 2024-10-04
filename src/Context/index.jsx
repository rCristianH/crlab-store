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

  //toggle 
  const [isProductCartOpen, setIsProductCartOpen] = useState(false);
  const openProductCart = () => {
    setIsProductCartOpen(true)
  }
  const closeProductCart = () => {
    setIsProductCartOpen(false)
  }
  const toggleProductCart = ()=> {
    setIsProductCartOpen(!isProductCartOpen)
  }

  //show product
  const [productToShow, setProductToShow] = useState({})

  //cart products
  const [cartProducts, setCartProducts] = useState([])

  //my orders
  const [order, setOrder] = useState(useL)

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
        isProductCartOpen,
        openProductCart,
        closeProductCart,
        toggleProductCart,
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
