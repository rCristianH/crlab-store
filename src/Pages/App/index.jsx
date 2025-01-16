import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import { ChekoutSideMenu } from '../../Components/CheckoutSideMenu';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter basename='/crlab-store/'>
        <Navbar />
        <AppRoutes />
        <ChekoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};


export { App };
