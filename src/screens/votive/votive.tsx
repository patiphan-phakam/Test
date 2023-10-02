import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardList, { ICardData } from "./components/cardList";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { IProductData } from "../../types/product";

interface Props {
  baseUrl: string;
}

export const Votive: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ICardData[]>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const res = await productService.getByType("3");
      if (res.data) {
        const setData = res.data.map((product: IProductData) => ({
          key: product.id,
          id: product.productId,
          title: product.productName,
          description: product.productDetail,
          productPrice: product.productPrice,
          image: product.productImages[0].productImageSource,
        }));
        setProduct(setData);
        setLoading(false);
      }
    };
    getProductPopurlar();
  }, []);

  return (
    <>
      <div className="container-content" style={{ marginBottom: "2rem" }}>
        <Row>
          <Col md={24}>
            <div style={{ margin: "0 5rem" }}>
              <h2
                style={{
                  color: "#028910",
                  wordWrap: "break-word",
                }}
              >
                พิธีบน/แก้บน
              </h2>
            </div>
          </Col>
          <CardList dataList={product} baseUrl={baseUrl} />
        </Row>
      </div>
    </>
  );
};
