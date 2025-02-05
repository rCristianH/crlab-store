import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);
  const { id,
    available,
    family,
    title,
    ref,
    price,
    cpu,
    ram,
    images,
    logoBrandCPU,
    storage,
    logoCpu, } = productToShow;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} overflow-auto mr-1 product-detail flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">{title}</h2>
        <MdClose className='cursor-pointer shadow bg-black text-white h-6 w-6 rounded-full' onClick={() => closeProductDetail()} />
      </div>
      {images && images.length > 0 ? (
        <figure className="">
          <div className="relative">
            <img
              className="bg-red px-10 w-full rounded-lg"
              src={images[currentImageIndex]}
              alt={title}
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-2xl"
              onClick={handlePrevImage}
            >
              <img src={images[(currentImageIndex - 1 + images.length) % images.length]} alt="Prev" className="w-8 h-8 rounded-lg" />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-2xl"
              onClick={handleNextImage}
            >
              <img src={images[(currentImageIndex + 1) % images.length]} alt="Next" className="w-8 h-8 rounded-lg" />
            </button>
          </div>
        </figure>
      ) : (
        <p className="p-6">No images available</p>
      )}
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">$ {Number(price).toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{cpu}</span>
        <span className="font-light text-sm">RAM {ram}</span>
        <span className="font-light text-sm">{storage}</span>
      </p>
    </aside>
  );
};
export { ProductDetail };
