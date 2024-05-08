import axios, { CanceledError } from "axios";

// Extracting a duplicate part
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// 统一交给 apiClient 进行管理
export { CanceledError };
