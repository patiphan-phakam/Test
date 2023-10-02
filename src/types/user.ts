export interface TLogin {
  username: string;
  password: string;
}

export interface TUserRegister {
  name: string;
  username: string;
  password: string;
}

export interface IUserData {
  id: number;
  userId?: string;
  username: string;
  password?: string;
  userLevel: number;
  userType?: string;
  fullName: string;
  address?: string;
  subdistrict?: string;
  district?: string;
  province?: string;
  postcode?: string;
  email?: string;
  phone?: string;
  active?: boolean;
  storeImage?: string;
  storeName?: string;
  createDate?: string;
  updateDate?: string;
}
