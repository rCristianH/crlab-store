import { useContext } from 'react';
import { Layout } from '../../Components/Layout';
import { OrdersCard } from '../../Components/OrdersCards';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md';

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div
        className={`flex items-center overflow-x-hidden mx-auto max-w-4xl w-100 flex-col rounded-lg my-order`}
      >
        <h2 className="font-medium text-xl">My Orders</h2>
        <div className="flex flex-wrap gap-3 justify-between items-center p-8 w-[500px]">

          {
            order.map((order, index) => (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard date={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
              </Link>
            ))
          }
        </div>
      </div>
    </Layout>
  );
};
export { MyOrders };
