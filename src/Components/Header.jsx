import { NavLink } from "react-router-dom";

const Header = () => {
  const navBar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
  ];


  return (
    <nav className="flex justify-center items-center gap-5 w-full font-bold p-5 bg-[#252728] border-b border-[#4f5151] mb-10">
      {navBar.map(({ name, path }) => (
        <NavLink
          key={name}
          to={path}
          className={({ isActive }) =>
            `transition-all duration-200 tracking-wide ${
              isActive
                ? "text-red-500 hover:text-red-600 hover:tracking-widest tracking-widest"
                : "text-white hover:text-red-500 hover:tracking-widest"
            }`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
