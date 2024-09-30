import { useContext } from 'react';
import { OrderCart } from "../../Components/OrderCart"
import { ShoppingCartContext } from '../../Context';

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)

  console.log(order[0].totalPrice);
  return (
    <aside
      className={`flex overflow-x-hidden mx-auto max-w-4xl w-100 mt-20 flex-col rounded-lg h-96 my-order`}
    >
      <div className="flex justify-between items-center p-8">
        <h2 className="font-medium text-xl">My Order</h2>
      </div>
      <div>
        {
          order?.slice(-1)[0].products.map(p => (
            <OrderCart key={p.id} id={p.id} title={p.title} price={p.price} imgURL={p.image} amount={p.amount} />
          ))
        }
      </div>
      <div className='fixed flex justify-evenly mx-4 mt-6 w-full bottom-14 p-2 rounded-lg'>
        <p className='font-semibold text-lg'>Total:</p>
        <span className='font-bold text-lg' >$ {order[0].totalPrice}</span>
      </div>




    </aside>

  );
};
export { MyOrder };
