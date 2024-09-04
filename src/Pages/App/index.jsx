import { BrowserRouter } from 'react-router-dom';
import { serviceWorker } from '../../Utils/SW';
import { AppRoutes } from '../../Routes/AppRoutes';
import { Navbar } from '../../Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
    
  );
};

serviceWorker();

export { App };
