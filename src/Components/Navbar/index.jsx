import "./styles.css"
import { MdOutlineShoppingCart, MdLogoDev } from 'react-icons/md';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';
import { serviceWorker } from "../../Utils/SW";

const Navbar = () => {
  //call service worker
  //here by basename
  serviceWorker()
  const { count, toggleProductCart } = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4 decoration-green-700';

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (count > 0) {
      setAnimate(true);

      // Eliminar la animación después de un tiempo
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 500); // Ajusta el tiempo de la animación (en ms) según lo que necesites

      return () => clearTimeout(timeout);
    }
  }, [count]);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">AM</NavLink>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/all">
            All
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/BI_AUDI_ALKOS">
            Audio
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/BI_CAMA_ALKOS">
            Cameras
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/BI_CELU_ALKOS">
            Smartphones
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/BI_COMP_ALKOS">
            Computers
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/BI_VIJU_ALKOS">
            VideoGames
          </NavbarItem>
        </li>
      </ul>

      <ul className="flex items-center gap-4">
        <li className="text-lg">
          <MdLogoDev />
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/my-orders">
            My Orders
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/my-account">
            My account
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/signin">
            Sign In
          </NavbarItem>
        </li>
        <li className="relative" onClick={() => toggleProductCart()}>
          <MdOutlineShoppingCart />
          <span className={`absolute bottom-2 -right-1 bg-gray-300 rounded-full p-0.5 aspect-square h-3 text-[10px] font-bold leading-none text-center transition-all duration-500 ease-out ${animate ? 'grow-animation bg-orange-500' : ''}`}>
            {count}
          </span>
        </li>
      </ul>
    </nav>
  );
};
export { Navbar };
