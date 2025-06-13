import axios from "axios";

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 从本地存储获取 token
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("请求出错:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error("响应出错:", error);
    return Promise.reject(error);
  }
);

export default service;
