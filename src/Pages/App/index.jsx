import { BrowserRouter } from 'react-router-dom';
import { serviceWorker } from '../../Utils/SW';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

serviceWorker();

export { App };
