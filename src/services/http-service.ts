import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string; // API的URL路径
  constructor(endpoint: string) {
    // initialization
    this.endpoint = endpoint;
  }

  getAll<T>() {
    // Get 请求统一接口
    // AbortController 能够实现  取消或者终止  异步操作
    const controller = new AbortController();

    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    // Delete 请求统一接口
    return apiClient.delete(`${this.endpoint}/${id}`);
  }

  create<T>(entity: T) {
    // Add 请求统一接口
    return apiClient.post(this.endpoint, entity);
  }

  // 由于要获取 id -> T extends Entity
  update<T extends Entity>(entity: T) {
    // Update 请求统一接口
    return apiClient.put(`${this.endpoint}/${entity.id}`, entity);
  }
}

// 为方便复用, 接收 API 的参数进行调用
const create = (endpoint: string) => new HttpService(endpoint);

export default create;
