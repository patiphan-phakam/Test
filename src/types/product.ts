export interface IProductData {
  id?: number;
  productAvgStar?: number;
  productDetail?: string;
  productId?: string;
  productName: string;
  productPrice: number;
  productSold: number;
  productType?: number;
  productTypeShow?: number;
  productImages: IProductDataImage[];
  userId: string;
  updateDate?: string;
  createDate?: string;
}

export interface IProductDataImage {
  id: number;
  productId: string;
  productImageId: string;
  productImageLevel: number;
  productImageSource: string;
  createDate: string;
  updateDate: string;
}
