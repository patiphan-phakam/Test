import { AxiosInstance } from "axios";
import { TLogin } from "../types/user";

export const UserService = (axiosInstance: AxiosInstance) => {
  return {
    login: async (user: TLogin) => {
      return await axiosInstance
        .post(`auth/login`, user)
        .then((response: any) => response.data)
        .catch((error: any) => error);
    },
    register: async (user: TLogin) => {
      return await axiosInstance
        .post(`user`, user)
        .then((response: any) => response.data)
        .catch((error: any) => error);
    },
  };
};
