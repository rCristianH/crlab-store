import { BrowserRouter } from 'react-router-dom';
import { serviceWorker } from '../../Utils/SW';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import { ChekoutSideMenu } from '../../Components/CheckoutSideMenu';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <ChekoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

serviceWorker();

export { App };
