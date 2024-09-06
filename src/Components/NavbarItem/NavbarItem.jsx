import { NavLink } from "react-router-dom";

const NavbarItem = ({to,children,activeStyle}) => {
  return (
    <NavLink to={to}
      className={({isActive}) => isActive ? activeStyle : undefined}
    >
      {children}
    </NavLink>
  )
};
export { NavbarItem };
