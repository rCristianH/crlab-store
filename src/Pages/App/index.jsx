import { BrowserRouter } from 'react-router-dom';
import { serviceWorker } from '../../Utils/SW';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import { ChekoutSideMenu } from '../../Components/CheckoutSideMenu';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename='/front-store'>
        serviceWorker();
        <Navbar />
        <AppRoutes />
        <ChekoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};


export { App };
