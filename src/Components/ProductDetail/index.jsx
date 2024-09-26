import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
const ProductDetail = () => {

  const {isProductDetailOpen, closeProductDetail} = useContext(ShoppingCartContext)

  return (
    <aside className={`${isProductDetailOpen ? "flex": "hidden"} product-detail flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white`}>
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Detail</h2>
        <MdClose onClick={()=>closeProductDetail()}/>
      </div>
    </aside>
  );
};
export { ProductDetail };
