import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000, // 设置超时时间
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，例如添加认证信息
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 日志记录
    console.log("Request Interceptor: ", config);
    return config;
  },
  (error) => {
    // 处理请求错误
    console.error("Request Interceptor Error: ", error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 在响应到达客户端并被 `then` 或 `catch` 处理之前做一些处理
    console.log("Response Interceptor: ", response);

    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(
        new Error(`Unexpected response status: ${response.status}`)
      );
    }
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      const { status, data } = error.response;
      // 根据状态码处理不同错误
      if (status === 401) {
        console.error("Unauthorized access - maybe redirect to login");
        // 可以在此处触发重新登录逻辑或页面跳转
      } else if (status === 403) {
        console.error("Forbidden - you don't have permission");
        // 可以在此处显示权限不足的提示
      } else if (status >= 500) {
        console.error("Server error:", status, data);
        // 可以在此处触发服务器错误提示
      } else {
        console.error("Response Error:", status, data);
      }
    } else if (error.request) {
      console.error("No Response:", error.request);
      // 可以在此处处理网络错误
    } else {
      console.error("Error:", error.message);
      // 可以在此处处理其他错误
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
