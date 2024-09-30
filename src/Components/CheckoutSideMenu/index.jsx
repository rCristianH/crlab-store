import { MdClose } from 'react-icons/md';
import './styles.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { OrderCart } from '../OrderCart';
import { TotalPrice } from '../../Utils/TotalPrice';



const ChekoutSideMenu = () => {
  const { closeProductCart, cartProducts, isProductCartOpen } =
    useContext(ShoppingCartContext)

  return (
    <aside
      className={`${isProductCartOpen ? 'flex' : 'hidden'} overflow-y-scroll overflow-x-hidden mr-1 product-cart flex-col fixed right-0 h-99 border-2 border-black rounded-lg bg-white pb-16`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">Shopping Cart</h2>
        <MdClose className='cursor-pointer bg-black text-white h-6 w-6 rounded-full' onClick={() => closeProductCart()} />
      </div>
      {
        cartProducts.map(p => (
          <OrderCart key={p.id} id={p.id} title={p.title} price={p.price} imgURL={p.image} amount={p.amount} />
        ))
      }
      <div className='fixed flex justify-evenly mx-4 mt-6 bg-black w-72 bottom-4 text-white p-2 rounded-lg'>
        <p className='font-semibold text-lg'>Total:</p>
        <span className='font-bold text-lg' >$ {TotalPrice(cartProducts)}</span>
      </div>


    </aside>
  );
};
export { ChekoutSideMenu };
