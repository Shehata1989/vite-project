/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authConText = createContext(null);

export const AuthProvider = ({ children }) => {
  // لتسجيل الدخول الى الموقع
  const [user, setUser] = useState(null);
  // قاعدة بيانات المستخدمين
  const [users, setUsers] = useState([]);

  const Navigate = useNavigate();

  const navBar = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    ...(!user
      ? [
          { name: "Login", path: "/login" },
          { name: "Signup", path: "/signup" },
        ]
      : [{ name: "Products", path: "/products" }]),
  ];

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      Navigate("/");
      return true;
    }
    return false;
  };

  const logOut = () => {
    setUser(null);
  };
  return (
    <authConText.Provider
      value={{ setUsers, users, login, user, navBar, logOut }}
    >
      {children}
    </authConText.Provider>
  );
};
