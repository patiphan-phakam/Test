import { AxiosInstance } from "axios";
import { TLogin } from "../types/user";

export const UserService = (axiosInstance: AxiosInstance) => {
  return {
    login: async (user: TLogin) => {
      return await axiosInstance
        .post(`auth/login`, user)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    getAll: async () => {
      return await axiosInstance
        .get(`user`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    register: async (user: TLogin) => {
      return await axiosInstance
        .post(`user`, user)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    profile: async () => {
      return await axiosInstance
        .get(`user/profile`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    findById: async (userId: string) => {
      return await axiosInstance
        .get(`user/${userId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    update: async (userId: string | undefined, data: any) => {
      return await axiosInstance
        .put(`user/${userId}`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    getStore: async () => {
      return await axiosInstance
        .get(`user/store/1`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
    getStoreLimit: async (take: number) => {
      return await axiosInstance
        .get(`user/store/1?take=${take}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};
