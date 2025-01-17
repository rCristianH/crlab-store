import { NavLink } from "react-router-dom";

const NavbarItem = ({to,children,activeStyle,more}) => {
  return (
    <NavLink 
      to={to}
      className={({isActive}) => 
        `${isActive ? activeStyle : ''} ${more ? 'text-base' : ''}`
      }
    >
      {children}
    </NavLink>
  )
};
export { NavbarItem };
