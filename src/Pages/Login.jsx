import { useState } from "react";
import { authConText } from "../authContext";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Auth = useContext(authConText);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername(e.target.username.value); 
    setPassword(e.target.password.value);

    // التحقق من الحقول
    if (!username) {
      setError("Username is required!");
      return;
    }
    if (username.length < 5) {
      setError("Username must be at least 5 characters long!");
      return;
    }
    if (!password) {
      setError("Password is required!");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }

    // إذا كانت الحقول صالحة
    setError(""); // مسح الخطأ
    Auth.login(username, password);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg shadow-md"
    >
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-500">
        Login
      </h2>
      {/* Username Field */}
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium">Username</label>
        <input
          name="username"
          type="text"
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Password Field */}
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Login
      </button>
      <div>{error}</div>
    </form>
  );
};

export default Login;
