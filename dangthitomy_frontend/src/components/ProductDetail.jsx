import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductService from "../services/ProductService";
import { useCart } from "../context/CartContext";
import { IMAGE_URL } from "../config";

const sizes = ["Nhỏ", "Vừa", "Lớn"];

const ProductDetail = () => {
 

  if (!product) {
    return (
      <h2 className="text-center text-2xl font-bold mt-10 text-white">
        Đang tải sản phẩm...
      </h2>
    );
  }

  

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Hình ảnh sản phẩm */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={IMAGE_URL+`products/${product.thumbnail}`}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          <p className="text-red-500 text-xl font-bold">
           
          </p>
          <p className="text-gray-400">{product.description}</p>

          {/* Kích cỡ */}
          <div>
            <label className="block text-white font-bold">Kích cỡ:</label>
            <select
              className="mt-1 p-2 border rounded w-full text-black bg-white border-gray-500 focus:outline-none"
             
            >
             
            </select>
          </div>

          {/* Số lượng */}
          <div>
            <label className="block text-white font-bold">Số lượng:</label>
            <input
              type="number"
              className="mt-1 p-2 border rounded w-full text-black bg-white border-gray-500"
              min="1"
            />
          </div>

          {/* Nút */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition">
              Mua ngay
            </button>
            <button
              className="px-6 py-3 bg-green-600 text-white text-lg rounded-full hover:bg-green-700 transition"
          
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
