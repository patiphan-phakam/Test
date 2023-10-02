import { AxiosInstance } from "axios";

export const BookingSerice = (axiosInstance: AxiosInstance) => {
  return {
    findAll: async () => {
      return await axiosInstance
        .get(`/booking`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },

    findByUserId: async (userId: string) => {
      return await axiosInstance
        .get(`/booking/historybyuser/${userId}`)
        .then((response: any) => response)
        .catch((error: any) => error);
    },

    update: async (bookingId: string, data: any) => {
      return await axiosInstance
        .put(`/booking/${bookingId}`, data)
        .then((response: any) => response)
        .catch((error: any) => error);
    },
  };
};
