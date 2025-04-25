import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductService from "../services/ProductService";
import BrandService from "../services/BrandService";
import CategoryService from "../services/CategoryService"; // ✅ Bổ sung nếu dùng

const Home = () => {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]); // nếu sau này dùng đến

  useEffect(() => {
    const fetchAllData = async () => {
      const productData = await ProductService.getAllProducts();
      const brandData = await BrandService.getAllBrands();
      const categoryData = await CategoryService.getAllCategories(); // nếu cần

      setProducts(productData);
      setBrands(brandData);
      setCategories(categoryData); // nếu cần
    };

    fetchAllData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Thương hiệu (Brand) */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 ml-5">Thương hiệu:</h2>
        <div className="flex flex-wrap gap-4 ml-5">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brand/${brand.id}`}
              className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-600">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="h-full"
          >
            <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-xl transition duration-300">
              <img
                src={`http://localhost:8188/laravelapirestfull/public/uploads/products/${product.thumbnail}`} // ✅ Update đường dẫn
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-red-500 font-bold mb-4">
                  {Number(product.price).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <button className="mt-auto px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
                  Mua ngay
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
