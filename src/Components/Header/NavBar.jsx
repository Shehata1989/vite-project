import { useContext } from "react";
import { authConText } from "../../authContext";
import NavItems from "./NavItems";

const NavBar = () => {
  const { navBar, user, logout } = useContext(authConText);
  return (
    <nav className="flex justify-center items-center gap-5 w-full font-bold p-5 bg-[#252728] border-b border-[#4f5151] mb-10">
      {navBar.map(({ name, path }) => (
        <NavItems key={name} name={name} path={path} />
      ))}
      {/* إضافة زر Logout عند تسجيل الدخول */}
      {user && (
        <button
          onClick={logout}
          className="tracking-wide text-white transition-all duration-200 hover:text-red-500"
        >
          Logout
        </button>
      )}
    </nav>
  );
};

export default NavBar;
