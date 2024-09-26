import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);
  const { id, title, price, description, category, image } = productToShow;

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} overflow-auto mr-1 product-detail flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Detail</h2>
        <MdClose className='cursor-pointer' onClick={() => closeProductDetail()} />
      </div>
      <figure className="">
        <img
          className="bg-red px-10 w-full rounded-lg"
          src={image}
          alt={title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  );
};
export { ProductDetail };
