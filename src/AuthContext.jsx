/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const authConText = createContext(null);

export const AuthProvider = ({ children }) => {
  // لتسجيل الدخول الى الموقع
  const [user, setUser] = useState(null);
  // قاعدة بيانات المستخدمين
  const [users, setUsers] = useState([]);
  

  console.log(users)
  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      console.log(user)
      return true;
    }
    return false;
  };

  // const signup = (username, password) => {
  //   const newUser = { username, password };
  //   setUsers([...users, newUser]);
  // }

  // const logOut = () => {
  //   setUser(null);
  // }
  return (
    <authConText.Provider value={{ setUsers, users , login}}>
      {children}
    </authConText.Provider>
  );
};
