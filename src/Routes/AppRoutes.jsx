import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/index';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { SignIn } from '../Pages/SingIn';
import { NotFound } from '../Pages/NotFound';
import { CategoryFilter } from '../Pages/Categories';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/front-store/', element: <Home /> },
    { path: '/front-store/all', element: <Home /> },
    { path: '/front-store/BI_AUDI_ALKOS', element: <CategoryFilter /> },
    { path: '/front-store/BI_CAMA_ALKOS', element: <CategoryFilter /> },
    { path: '/front-store/BI_CELU_ALKOS', element: <CategoryFilter /> },
    { path: '/front-store/BI_COMP_ALKOS', element: <CategoryFilter /> },
    { path: '/front-store/BI_VIJU_ALKOS', element: <CategoryFilter /> },
    { path: '/front-store/my-account', element: <MyAccount /> },
    { path: '/front-store/my-order', element: <MyOrder /> },
    { path: '/front-store/my-orders', element: <MyOrders /> },
    { path: '/front-store/my-orders/last', element: <MyOrder /> },
    { path: '/front-store/my-orders/:id', element: <MyOrder /> },
    { path: '/front-store/signin', element: <SignIn /> },
    { path: '/front-store/*', element: <NotFound /> },
  ]);
  return routes;
};

export { AppRoutes };
