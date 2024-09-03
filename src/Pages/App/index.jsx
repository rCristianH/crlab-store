import { BrowserRouter } from 'react-router-dom';
import { serviceWorker } from '../../Utils/SW';
import { AppRoutes } from '../../Routes/AppRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
};

serviceWorker();

export { App };
