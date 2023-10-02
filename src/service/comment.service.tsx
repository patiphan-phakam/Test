import { AxiosInstance } from "axios";

export const CommentService = (axiosInstance: AxiosInstance) => {
  return {
    create: async (data: any) => {
      return await axiosInstance
        .post(`/comment`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findByUserId: async (userId: string) => {
      return await axiosInstance
        .get(`/comment/user/${userId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findByProductId: async (productId: string) => {
      return await axiosInstance
        .get(`/comment/${productId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findAll: async () => {
      return await axiosInstance
        .get(`/comment`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};
