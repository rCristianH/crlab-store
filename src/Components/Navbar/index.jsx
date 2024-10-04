import "./styles.css"
import { MdOutlineShoppingCart, MdLogoDev } from 'react-icons/md';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
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
          <NavbarItem activeStyle={activeStyle} to="/clothes">
            Clothes
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/electronics">
            Electronics
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/fornitures">
            Fornitures
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/toys">
            Toys
          </NavbarItem>
        </li>
        <li>
          <NavbarItem activeStyle={activeStyle} to="/others">
            Others
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
