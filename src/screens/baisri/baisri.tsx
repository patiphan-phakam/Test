import { Row } from "antd";
import React, { useEffect, useState } from "react";
import CardCarousel from "../../components/CardCarousel";
import { UserService } from "../../service/user-service";
import { axiosBackend } from "../../config/axiosBackend";
import CarouselCardSkeleton from "../../components/cardCarouselProduct-skeleton";

interface Props {
  baseUrl: string;
}

export const Baisri: React.FC<Props> = ({ baseUrl }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [store, setStore] = useState<any>([]);
  useEffect(() => {
    const userService = UserService(axiosBackend);
    const getStore = async () => {
      const res = await userService.getStore();
      if (res.data) {
        const setData = res.data.map((product: any) => ({
          key: product.id,
          id: product.productId,
          title: product.productName,
          description: product.productDetail,
          image: product.productImages[0].productImageSource,
        }));
        setStore(setData);
      }
    };
    getStore();
  }, []);

  return (
    <>
      <div className="container-content" style={{ marginBottom: "2rem" }}>
        <Row>
          <h2
            style={{
              color: "#028910",
              marginLeft: "5rem",
              wordWrap: "break-word",
            }}
          >
            ร้านค้าทั้งหมด
          </h2>
        </Row>
        {loading ? (
          <CarouselCardSkeleton />
        ) : (
          <CardCarousel dataList={store} baseUrl={baseUrl} />
        )}
      </div>
    </>
  );
};
