import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";
import { ProductService } from "../../../service/product-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { useEffect, useState } from "react";
import { IProductData } from "../../../types/product";

export const Popular: React.FC<{}> = () => {
  const [productList, setProductList] = useState<ICardData[]>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProduct = async () => {
      const res = await productService.getAll();
      if (res.data) {
        const setData = res.data
          .sort((a: { id: number }, b: { id: number }) => a.id - b.id)
          .map((product: IProductData) => ({
            id: product.productId,
            title: product.productName,
            description: product.productDetail,
            image: product.productImages[0].productImageSource,
          }));
        setProductList(setData);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>ยอดนิยม</h2>
        </Row>
        <CardCarousel dataList={productList} baseUrl="/baisri/product" />
      </div>
    </>
  );
};
