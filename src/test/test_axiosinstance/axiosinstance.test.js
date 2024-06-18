import axiosInstance from "@/axiosConfig/axiosInterceptors";
import MockAdapter from "axios-mock-adapter";
import { describe, it, expect, vi } from "vitest";

// axiosInstance.test.js
describe("Axios Interceptors", () => {
  let mock;

  // beforeEach 和 afterEach 是在每个测试用例之前和之后执行的钩子函数(vitest的全局函数)
  beforeEach(() => {
    // 创建 Axios Mock Adapter 实例
    mock = new MockAdapter(axiosInstance);
  });

  afterEach(() => {
    // 重置 mock
    mock.reset();
  });

  it("should add Authorization header if token exists", async () => {
    const token = "test-token";
    localStorage.setItem("token", token);

    mock.onGet("/test").reply(200, { data: "success" });

    const response = await axiosInstance.get("/test");

    expect(response).toEqual({ data: "success" });
    expect(mock.history.get[0].headers.Authorization).toBe(`Bearer ${token}`);
  });

  //   it("should log request and response", async () => {
  //     const consoleLogSpy = vi.spyOn(console, "log");

  //     mock.onGet("/test").reply(200, { data: "success" });

  //     await axiosInstance.get("/test");

  //     expect(consoleLogSpy).toHaveBeenCalledWith(
  //       expect.stringContaining("Request Interceptor:")
  //     );
  //     expect(consoleLogSpy).toHaveBeenCalledWith(
  //       expect.stringContaining("Response Interceptor:")
  //     );

  //     consoleLogSpy.mockRestore();
  //   });

  //   it("should handle response error status", async () => {
  //     mock.onGet("/test").reply(401, { error: "Unauthorized" });

  //     try {
  //       await axiosInstance.get("/test");
  //     } catch (error) {
  //       expect(error.response.status).toBe(401);
  //       expect(error.response.data).toEqual({ error: "Unauthorized" });
  //     }
  //   });

  //   it("should handle network error", async () => {
  //     mock.onGet("/test").networkError();

  //     try {
  //       await axiosInstance.get("/test");
  //     } catch (error) {
  //       expect(error.message).toBe("Network Error");
  //     }
  //   });
});
