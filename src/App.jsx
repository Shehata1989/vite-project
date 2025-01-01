/* eslint-disable react/prop-types */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  NavBar,
  Home,
  About,
  Contact,
  Products,
  Login,
  Signup,
} from "./Pages/importAll";
import { authConText, AuthProvider } from "./authContext";
import "./App.css";
import { useContext } from "react";

function App() {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(authConText);

    return user ? children : <Navigate to="/login" />;
  };
  const GuestRoute = ({ children }) => {
    const { user } = useContext(authConText);

    return !user ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <GuestRoute>
                <Signup />
              </GuestRoute>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-3xl font-bold text-blue-500">
                404 Not Found
              </h1>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
