import axios from 'axios';

const API_BASE_URL = 'https://localhost:7059/api'; // Cập nhật nếu backend chạy ở cổng khác hoặc domain khác

const login = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, {
      username,
      password
    });
  
    const { token } = response.data;
  
    if (token) {
      localStorage.setItem('token', token); // lưu token vào localStorage
    }
  
    return response.data; // hoặc return token nếu bạn chỉ cần token
  };
  

  const register = async (username, password) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, {
      username,
      password
    });
    return response.data;
  };
  
  const AuthService = {
    login,
    register
  };
  
  export default AuthService;
  
