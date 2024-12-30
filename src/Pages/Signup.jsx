import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { authConText } from "../authContext";

const Signup = () => {
  const [error, setError] = useState(""); // استخدام useState لتخزين الخطأ
  const Auth = useContext(authConText); // الحصول على السياق
  const { users, setUsers } = Auth; // استرجاع الـ users و setUsers من السياق

  // دالة للتحقق من الحقول
  const validateFields = (username, email, password) => {
    if (!username) {
      return "Username is required!";
    }
    if (username.length < 5) {
      return "Username must be at least 5 characters long!";
    }
    if (!password) {
      return "Password is required!";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long!";
    }
    if (!email.includes("@") || email.length < 5) {
      return "Email must be at least 5 characters long and contain @";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const validationError = validateFields(username, email, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    // إذا كانت الحقول صالحة
    setError(""); // مسح الخطأ

    const newUser = {
      username,
      email,
      password,
      id: Date.now(), // استخدام الوقت الحالي كـ id فريد
    };

    // إضافة المستخدم إلى الـ users في السياق
    setUsers([...users, newUser]);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-500">
        Create an Account
      </h2>

      {/* Username Field */}
      <div className="mb-4">
        <label htmlFor="username" className="block mb-1 text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={8}
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
      >
        Sign Up
      </button>

      {/* Footer */}
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>

      {/* Error Message */}
      {error && <p className="mt-2 text-center text-red-500">{error}</p>}
    </form>
  );
};

export default Signup;
