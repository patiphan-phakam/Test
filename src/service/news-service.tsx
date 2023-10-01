import { AxiosInstance } from "axios";

export const NewsService = (axiosInstance: AxiosInstance) => {
  return {
    getAll: async () => {
      return await axiosInstance
        .get(`/news`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    create: async (data: any) => {
      return await axiosInstance
        .post(`/news`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    update: async (newsId: string, data: any) => {
      return await axiosInstance
        .put(`/news/${newsId}`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findById: async (newsId: string) => {
      return await axiosInstance
        .get(`/news/${newsId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    delete: async (newsId: string) => {
      return await axiosInstance
        .delete(`/news/${newsId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};
