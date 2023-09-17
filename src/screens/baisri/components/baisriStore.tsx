import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import CardCarouselProduct from "../../../components/CardCarouselProduct";
import { useParams } from "react-router-dom";
import { ProductService } from "../../../service/product-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { IProductData } from "../../../types/product";
import { UserService } from "../../../service/user-service";
import CarouselCardSkeleton from "../../../components/CardProductSkeleton";

interface Props {
  baseUrl: string;
}

export const BaisriStore: React.FC<Props> = ({ baseUrl }) => {
  const { storeId } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    const userService = UserService(axiosBackend);
    const productService = ProductService(axiosBackend);
    const getStore = async () => {
      if (storeId) {
        const res = await userService.findById(storeId);
        if (res.data) {
          const { data } = res;
          setStore(data);
          return data;
        }
      }
    };
    getStore().then(async (storeData: any) => {
      if (storeId) {
        const res = await productService.getByStoreId(storeId);
        if (res && res.data) {
          const { data } = res;
          const setData = data.map((product: IProductData) => ({
            ...product,
            key: product.id,
            store: storeData.fullName,
            province: storeData.province,
          }));
          setProduct(setData);
          setLoading(false);
        }
      }
    });
  }, [storeId]);

  return (
    <>
      <div className="container-content" style={{ marginBottom: "3rem" }}>
        <Row>
          <Col md={24}>
            <p style={{ marginLeft: "5rem", fontSize: "20px" }}>
              {store.fullName}
            </p>
          </Col>
        </Row>
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>
            สินค้าทั้งหมด
          </h2>
        </Row>
        {loading ? (
          <CarouselCardSkeleton />
        ) : (
          <CardCarouselProduct dataList={product} baseUrl={baseUrl} />
        )}

        {/* <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>
            บายศรีใบตองสด
          </h2>
        </Row>
        <CardCarouselProduct dataList={product} baseUrl={baseUrl} />
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>บายศรีแห้ง</h2>
        </Row>
        <CardCarouselProduct dataList={product} baseUrl={baseUrl} />
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>ชุดบวงสรวง</h2>
        </Row>
        <CardCarouselProduct dataList={product} baseUrl={baseUrl} /> */}
      </div>
    </>
  );
};
