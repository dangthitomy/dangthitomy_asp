import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CategoryService from "../services/CategoryService";
import LoginModal from "./LoginModal";

const Header = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  const [categories, setCategories] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username") || null);

  // Fetch danh mục sản phẩm
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryService.getAllCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // Đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUsername(null);
  };

  return (
    <>
      <div className="p-4 bg-black flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-[40px] font-bold text-red-700">MOCCOM</h1>
        </div>

        {/* Danh mục */}
        <div className="flex space-x-5 ml-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="text-white hover:text-red-500 transition"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-3 pl-10 text-white bg-gray-800 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* User & Cart */}
        <div className="flex items-center space-x-6">
          {/* User info */}
          <div className="flex items-center space-x-2 text-white">
            <FaUser
              className="text-2xl cursor-pointer hover:text-red-500 transition"
              onClick={() => {
                if (!username) setShowLogin(true);
              }}
            />
            {username ? (
              <span
                className="text-sm cursor-pointer hover:text-red-500 transition"
                onClick={handleLogout}
                title="Đăng xuất"
              >
                {username}
              </span>
            ) : (
              <span
                className="text-sm cursor-pointer hover:text-blue-400 transition"
                onClick={() => setShowRegister(true)}
              >
                Đăng ký
              </span>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-white text-2xl cursor-pointer hover:text-red-500 transition" />
              {totalQuantity > 0 && (
                <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-1 z-10">
                  {totalQuantity}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Modal đăng nhập */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(username) => {
            setUsername(username);
            setShowLogin(false);
          }}
        />
      )}

    </>
  );
};

export default Header;
