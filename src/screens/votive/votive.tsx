import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardList from "./components/cardList";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { IProductData } from "../../types/product";
import { ProductSkeleton } from "../home/components/productSkeleton";

interface Props {
  baseUrl: string;
}

export const Votive: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const { data } = await productService.getByType("3");
      if (data) {
        const result = data
          .map((item: any) => {
            const { province, fullName } = item.user;
            return item.products.map((product: any) => ({
              ...product,
              province,
              fullName,
            }));
          })
          .flat();
        setProduct(result);
      }

      setLoading(false);
    };

    getProductPopurlar();
  }, []);

  return (
    <>
      {loading ? (
        <ProductSkeleton title={""} />
      ) : (
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
      )}
    </>
  );
};
