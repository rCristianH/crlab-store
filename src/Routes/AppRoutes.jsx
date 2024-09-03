import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/index';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { SignIn } from '../Pages/SingIn';
import { NotFound } from '../Pages/NotFound';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

export { AppRoutes };
