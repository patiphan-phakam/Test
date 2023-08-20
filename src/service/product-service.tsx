import { AxiosInstance } from "axios";

export const ProductService = (axiosInstance: AxiosInstance) => {
  return {
    getAll: async () => {
      return await axiosInstance
        .get(`/product`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    getByUser: async () => {
      return await axiosInstance
        .get(`/product/user`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    createProduct: async (data: any) => {
      return await axiosInstance
        .post(`/product`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    updateProduct: async (productId: string, data: any) => {
      return await axiosInstance
        .put(`/product/${productId}`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findById: async (productId: string) => {
      return await axiosInstance
        .get(`/product/${productId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findImagesById: async (productId: string) => {
      return await axiosInstance
        .get(`/product/image/${productId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};