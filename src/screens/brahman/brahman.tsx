import React, { useEffect, useState } from "react";
import { axiosBackend } from "../../config/axiosBackend";
import { ProductService } from "../../service/product-service";
import { Content } from "antd/es/layout/layout";
import { CardBrahman } from "./components/cardBrahman";
import { Row } from "antd";
import { ProductSkeleton } from "../../components/ProductSkeleton";

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
        <Content className="content">
          <div className="card-home">
            <ProductSkeleton />
          </div>
        </Content>
      ) : (
        <Content className="content">
          <div className="card-home">
            {product.length > 0 ? (
              product.map((dataList: any, index: number) => (
                <Row key={index + 1}>
                  <CardBrahman brahman={dataList} baseUrl={baseUrl} />
                </Row>
              ))
            ) : (
              <></>
            )}
          </div>
        </Content>
      )}
    </>
  );
};
