import { AxiosInstance } from "axios";
import { TLogin } from "../types/loginTypes";

export const UserService = (axiosInstance: AxiosInstance) => {
  return {
    login: async (user: TLogin) => {
      return await axiosInstance
        .post(`auth/login`, user)
        .then((response: any) => response.data)
        .catch((error: any) => error);
    },
  };
};
