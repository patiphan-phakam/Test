import { AxiosInstance } from "axios";

export const BookingSerice = (axiosInstance: AxiosInstance) => {
  return {
    findByUserId: async (userId: string) => {
      return await axiosInstance
        .get(`/booking/historybyuser/${userId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },

    update: async (userId: string, data: any) => {
      return await axiosInstance
        .put(`/booking/${userId}`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};
