import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthService.login(username, password);

      // Lưu vào localStorage
      localStorage.setItem('username', username);
      if (user.token) {
        localStorage.setItem('token', user.token); // nếu backend trả về token
      }

      // Gửi username lên Header để hiển thị
      onLoginSuccess(username);

      console.log('Đăng nhập thành công:', user);
    } catch (err) {
      console.error('Lỗi đăng nhập:', err);
      alert('Đăng nhập thất bại');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className="w-full border border-gray-300 p-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full border border-gray-300 p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
