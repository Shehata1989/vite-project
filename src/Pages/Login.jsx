import { useContext, useState } from "react";
import { authConText } from "../authContext";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // تصحيح اسم المتغير
  const InputRef = useRef(null);
  const Navigate = useNavigate();
  const Auth = useContext(authConText);

useEffect(() => {
  InputRef.current.focus();
},[])

  const validateFields = ({ username, password }) => {
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
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateFields(user);

    if (validationError) {
      setError(validationError);
      return;
    }

    // تفعيل حالة التحميل عند بدء التسجيل
    setIsLoading(true);

    // تسجيل الدخول
    const loginSuccess = await Auth.login(user.username, user.password);  

    if (!loginSuccess) {
      setError("Invalid username or password.");
    }

    // إيقاف حالة التحميل بعد إتمام عملية التسجيل
    setIsLoading(false);

    // إعادة تعيين النموذج بعد التسجيل الناجح
    e.target.reset();
    Navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md rounded-lg shadow-md"
    >
      <h2 className="mb-6 text-2xl font-bold text-center text-blue-500">Login</h2>
      {/* Username Field */}
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium">Username</label>
        <input
        ref={InputRef}
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          name="username"
          type="text"
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Password Field */}
      <div className="w-full mb-4">
        <label className="block mb-1 text-sm font-medium">Password</label>
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          name="password"
          type="password"
          className="w-full px-4 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        disabled={isLoading} // تعطيل الزر أثناء التحميل
      >
        {isLoading ? "Loading..." : "Login"}
      </button>

      {/* عرض الأخطاء إذا كانت موجودة */}
      {error && <div className="mt-2 text-sm text-red-500">{error}</div>}
    </form>
  );
};

export default Login;
