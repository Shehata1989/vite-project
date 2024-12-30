/* eslint-disable react/prop-types */


const Forms = ({loginForm, handelUser, handelPass}) => {
  return (
    <form onSubmit={loginForm} className="flex flex-col items-center gap-5 items login-form">
    <label className="flex items-center gap-5" htmlFor="username">
      <span className="w-[85px]">UserName</span>
      <input
        onChange={handelUser}
        className="p-2 transition-all duration-300 bg-transparent border border-gray-500 outline-none focus:border-blue-500"
        type="text"
        name="username"
        id="username"
        required
        minLength={5}
      />
    </label>
    <label className="flex items-center gap-5" htmlFor="password">
      <span className="w-[85px]">Password</span>
      <input
      onChange={handelPass}
        className="p-2 transition-all duration-300 bg-transparent border border-gray-500 outline-none focus:border-blue-500"
        type="password"
        name="password"
        id="password"
        required
        minLength={8}
        maxLength={20}
      />
    </label>
    <button
      type="submit"
      className="px-10 py-2 font-bold duration-300 bg-blue-500 hover:bg-blue-600"
    >
      Login
    </button>
  </form>
  )
}

export default Forms