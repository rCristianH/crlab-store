import { useContext } from 'react';
import { OrderCard } from "../../Components/OrderCard"
import { ShoppingCartContext } from '../../Context';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getLastPathSetment } from '../../Utils/url';

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext)
  const orderID = getLastPathSetment()

  const triggerLast = orderID === "last";
  const triggerID = !triggerLast;

  const selectedOrder = triggerLast
    ? order?.slice(-1)[0]
    : triggerID
      ? order[orderID]
      : null;

  return (
    <aside
      className={`flex overflow-x-hidden mx-auto max-w-4xl w-100 mt-20 flex-col rounded-lg h-[30rem] my-order`}
    >
      <Link to={`/my-orders`} ><div className="flex justify-start items-center pl-20">

        <MdArrowBackIos />
        <h2 className="font-medium text-xl">My Order</h2>
      </div>
      </Link>

      <div>
        {selectedOrder?.products.map(p => (
          <OrderCard key={p.id} id={p.id} title={p.title} price={p.price} imgURL={p.image} amount={p.amount} />
        ))
        }
      </div>
      <div className='fixed flex justify-evenly mx-4 mt-6 w-full bottom-14 p-2 rounded-lg'>
        <p className='font-semibold text-lg'>Total:</p>
        <span className='font-bold text-lg' >$ {selectedOrder.totalPrice}</span>
      </div>




    </aside>

  );
};
export { MyOrder };
