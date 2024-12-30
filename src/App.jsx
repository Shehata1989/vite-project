import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header, Home, About, Contact, Login, Signup } from "./Pages/importAll";
import { AuthProvider } from "./authContext";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
