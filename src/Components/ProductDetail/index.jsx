import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShoppingCartContext);
  const { code_string, name_text_es, pricevalue_cop_double, keyfeatures_string_mv } = productToShow;
  const img750 = productToShow["img-750wx750h_string"]

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} overflow-auto mr-1 product-detail flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Detail</h2>
        <MdClose className='cursor-pointer bg-black text-white h-6 w-6 rounded-full' onClick={() => closeProductDetail()} />
      </div>
      <figure className="">
        <img
          className="bg-red px-10 w-full rounded-lg"
          src={`https://www.alkosto.com${img750}`}
          alt={name_text_es}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">$ {Number(pricevalue_cop_double).toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span className="font-medium text-md">{name_text_es}</span>
        <span className="font-light text-sm">{keyfeatures_string_mv}</span>
      </p>
    </aside>
  );
};
export { ProductDetail };
