import { useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  //destructuring context
  const {
    openProductDetail,
    closeProductDetail,
    setCount,
    count,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openProductCart,
    closeProductCart,
  } = useContext(ShoppingCartContext);
  //products from api
  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = data.data;

  const showProduct = (productDetail) => {
    setProductToShow(productDetail);
    closeProductCart()
    openProductDetail();
  };
  const addProductsToCart = (productData) => {
    setCount(count + 1)
    productData.amount = 1
    closeProductDetail()
    openProductCart()
    setCartProducts(() => {
      const productInCart = cartProducts.find(p => p.id === productData.id)

      if (productInCart) {
        return cartProducts.map(p => p.id === productData.id
          ? { ...p, amount: p.amount + 1 } : p
        )
      } else {

        return [...cartProducts, productData]
      }
    })
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 aspect-[3/4] rounded-lg border-2 border-gray-900 mb-4"
    >
      <figure className="relative flex items-center justify-center mb-2 w-full h-4/5 p-2" >
        <span className="border-2 border-gray-700 absolute -top-5 left-2 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className=" max-h-full max-w-f p-2 object-cover rounded-lg"
          src={image}
          alt={description}
          onClick={() => showProduct(data.data)}
        />
        <MdAdd
          onClick={() => {
            addProductsToCart(data.data)

          }}
          className="absolute top-0 right-0 w-6 h-6 rounded-full m-2 p-1 bg-black text-white"
        />
      </figure>
      <p className="flex justify-between m-2">
        <span className="text-sm font-light overflow-hidden h-10">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </div>
  );
};
export { Card };
