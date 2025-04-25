// services/ProductService.js
import axios from 'axios';
import { API_BASE_URL } from '../config';

const ProductService = {
  // lấy tất cả sản phẩm
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/Product`);
      return response.data; // sửa lại nếu API trả về mảng trực tiếp
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      return [];
    }
  },
};

export default ProductService;
