import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { OrderCart } from '../OrderCart';



const ChekoutSideMenu = () => {
  const { closeProductCart, cartProducts, isProductCartOpen } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`${isProductCartOpen ? 'flex' : 'hidden'} overflow-auto mr-1 product-cart flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <MdClose className='cursor-pointer' onClick={() => closeProductCart()} />
      </div>
      {
        cartProducts.map(p => (
          <OrderCart key={p.id} id={p.id} title={p.title} price={p.price} imgURL={p.image} amount={p.amount} />
        ))
      }
    </aside>
  );
};
export { ChekoutSideMenu };
