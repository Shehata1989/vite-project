/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"


const NavItems = ({name, path}) => {
  return (
    <NavLink
    to={path}
    className={({ isActive }) =>
      `transition-all duration-200 tracking-wide ${
        isActive
          ? "text-blue-500 hover:text-blue-500 hover:tracking-widest tracking-widest"
          : "text-white hover:text-blue-500 hover:tracking-widest"
      }`
    }
  >
    {name}
  </NavLink>
  )
}

export default NavItems