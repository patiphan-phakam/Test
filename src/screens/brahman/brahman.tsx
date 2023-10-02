import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardList from "./components/cardList";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { ProductSkeleton } from "../home/components/productSkeleton";

interface Props {
  baseUrl: string;
}

export const Brahman: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    const productService = ProductService(axiosBackend);
    const getProductPopurlar = async () => {
      const res = await productService.getByType(2);
      if (res.data) {
        setProduct(res.data);
        setLoading(false);
      }
    };
    getProductPopurlar();
  }, []);

  return (
    <>
      {loading ? (
        <ProductSkeleton title={""} />
      ) : (
        <div className="container-content" style={{ marginBottom: "2rem" }}>
          {product.length > 0 ? (
            product.map((item: any, index: number) => (
              <Row key={index}>
                <Col md={24}>
                  <div style={{ margin: "0 5rem" }}>
                    <h2
                      style={{
                        color: "#028910",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.user.fullName}
                    </h2>
                  </div>
                </Col>
                {item.products && (
                  <CardList dataList={item} baseUrl={baseUrl} />
                )}
              </Row>
            ))
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};
