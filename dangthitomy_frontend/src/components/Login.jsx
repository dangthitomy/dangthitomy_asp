import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[500px] max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold text-lg">Email</label>
            <div className="flex items-center border rounded-lg px-4 py-3">
              <FaUser className="text-gray-500 mr-3 text-lg" />
              <input
                type="email"
                placeholder="Nhập email..."
                className="w-full outline-none bg-transparent text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold text-lg">Mật khẩu</label>
            <div className="flex items-center border rounded-lg px-4 py-3">
              <FaLock className="text-gray-500 mr-3 text-lg" />
              <input
                type="password"
                placeholder="Nhập mật khẩu..."
                className="w-full outline-none bg-transparent text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex justify-between text-sm mb-6">
            <a href="#" className="text-blue-500 hover:underline text-lg">
              Quên mật khẩu?
            </a>
            <a href="#" className="text-blue-500 hover:underline text-lg">
              Đăng ký ngay
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-semibold"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
