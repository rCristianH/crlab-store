import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/index';
import { MyAccount } from '../Pages/MyAccount';
import { MyOrder } from '../Pages/MyOrder';
import { MyOrders } from '../Pages/MyOrders';
import { SignIn } from '../Pages/SingIn';
import { NotFound } from '../Pages/NotFound';
import { CategoryFilter } from '../Pages/Categories';
import { Serie } from '../Pages/Serie';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/all', element: <Home /> },
    { path: '/ideapad', element: <Serie />},
    { path: '/SLIM3', element: <CategoryFilter />},
    { path: '/SLIM5', element: <CategoryFilter />},    
    { path: '/thinkbook', element: <Serie />},
    { path: '/BI_AUDI_ALKOS', element: <CategoryFilter /> },
    { path: '/BI_CAMA_ALKOS', element: <CategoryFilter /> },
    { path: '/BI_CELU_ALKOS', element: <CategoryFilter /> },
    { path: '/BI_COMP_ALKOS', element: <CategoryFilter /> },
    { path: '/BI_VIJU_ALKOS', element: <CategoryFilter /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/signin', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return routes;
};

export { AppRoutes };
