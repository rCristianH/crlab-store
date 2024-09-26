import { useContext } from 'react';
import { MdAdd } from 'react-icons/md';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const { openProductDetail, setCount, count, setProductToShow } =
    useContext(ShoppingCartContext);
  const { id, title, price, description, category, image } = data.data;
  const showProduct = (productDetail) => {
    setProductToShow(productDetail);
    openProductDetail();
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 aspect-[3/4] rounded-lg border-2 border-gray-900 mb-4"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative flex items-center justify-center mb-2 w-full h-4/5 p-2">
        <span className="border-2 border-gray-700 absolute -top-5 left-2 bg-white rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className=" max-h-full max-w-f p-2 object-cover rounded-lg"
          src={image}
          alt={description}
        />
        <MdAdd
          onClick={() => setCount(count + 1)}
          className="absolute top-0 right-0 bg-white w-6 h-6 rounded-full m-2 p-1"
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
