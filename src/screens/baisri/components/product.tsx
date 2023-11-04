import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductPreview } from "./productPreview";
import { Row, Col, Rate, Button, Modal, message } from "antd";
import CardCarouselReview, {
  ICardDataReview,
} from "../../../components/CardCarouselReview";
import { ProductService } from "../../../service/product-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { IProductData } from "../../../types/product";
import { UserService } from "../../../service/user-service";
import { IStoreData } from "../../../types/store";
import { useAuth } from "../../../auth/auth";
import { IUserData } from "../../../types/user";
import { CommentService } from "../../../service/comment.service";
import baisri from "../../../images/home-learn.png";
import { Content } from "antd/es/layout/layout";

export const Product: React.FC = () => {
  const { productId } = useParams();
  const { signout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  // const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<IProductData | undefined>();
  const [store, setStore] = useState<IStoreData>();
  const productService = ProductService(axiosBackend);
  const userService = UserService(axiosBackend);

  /* eslint-disable */
  useEffect(() => {
    const getProduct = async () => {
      if (productId) {
        const resProduct = await productService.findById(productId);
        if (resProduct.data) {
          setProduct(resProduct.data);
          const resStore = await userService.findById(resProduct.data.userId);
          if (resStore.data) {
            setStore(resStore.data);
          }
        }
      }
    };
    getProduct();
  }, [productId]);

  const [dataList, setDataList] = useState<any>([]);
  useEffect(() => {
    const commentService = CommentService(axiosBackend);
    const getComment = async () => {
      const res = await commentService.findAll();
      if (res.data) {
        setDataList(
          res.data.filter(
            (comment: ICardDataReview) => comment.productId === productId
          )
        );
      }
    };
    getComment();
  }, []);

  /* eslint-disable */
  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const res = await userService.profile();
      if (res && res.data) {
        setUserProfile(res.data);
        return;
      }
      signout(() => {});
      setUserProfile(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      fetchUserProfile(token);
    }
  }, []);

  const handleShow = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitBuy = async () => {
    const data = {
      userId: userProfile?.userId,
      productPrice: product?.productPrice,
      status: "new",
      productId: product?.productId,
      lineData: {
        storePhone: store?.phone,
        storeName: store?.fullName,
        proName: product?.productName,
        proPrice: product?.productPrice,
        cusName: userProfile?.fullName,
        cusPhone: userProfile?.phone,
      },
    };
    const res = await productService.orderProduct(data);
    if (res) {
      message.success("คำสั่งซื้อของคุณดำเนินการเรียบร้อยแล้ว");
      setIsModalOpen(false);
      return;
    }
    message.error("เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง");
    setIsModalOpen(false);
    return;
  };

  return (
    <>
      <Content className="content">
        {product && (
          <>
            <ProductPreview images={product.productImages ?? [baisri]} />
            <Row>
              <Col span={24} style={{ marginTop: "0.5rem" }}>
                <p className="card-name-custom">{product.productName}</p>
              </Col>
              <Col span={24} style={{ display: "flex" }}>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={5}
                  className="card-rate-custom"
                />
                <p
                  style={{
                    marginTop: "4px",
                    fontSize: "16px",
                    marginLeft: "4px",
                    color: "rgba(0, 0, 0, 0.35)",
                  }}
                >
                  {`| ขายแล้ว ${product.productSold}`}
                </p>
              </Col>
              <Col span={24}>
                <p className="card-price-custom">{`฿${product.productPrice}`}</p>
              </Col>
              <Col span={24}>
                <p className="text-description-custom">รายละเอียดสินค้า</p>
              </Col>
              <Col span={24}>
                <p className="text-detail-custom">{product.productDetail}</p>
              </Col>

              {store && (
                <>
                  <Col span={24} style={{ marginTop: "1em" }}>
                    <p className="text-description-custom">{store.storeName}</p>
                  </Col>
                  <Col span={24}>
                    <p className="text-store-detail-custom">
                      เจ้าของโดย: {store.fullName}
                    </p>
                    <p className="text-store-detail-custom">
                      เบอร์โทร: {store.phone}
                    </p>
                    <p className="text-store-detail-custom">
                      พิกัด:{" "}
                      {`${store.address} ${store.subdistrict} ${store.district}  ${store.province} ${store.postcode}`}
                    </p>
                  </Col>
                </>
              )}
            </Row>
            <Row>
              {userProfile?.userLevel === 2 && (
                <Button className="green-button" onClick={handleShow}>
                  ซื้อ
                </Button>
              )}
            </Row>
            <Row style={{ display: "flex" }}>
              <h2 style={{ color: "#028910" }}>รีวิวจากลูกค้า</h2>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  marginLeft: "5px",
                  color: "rgba(0, 0, 0, 0.35)",
                }}
              >{`(${dataList.length})`}</p>
            </Row>
          </>
        )}

        <CardCarouselReview dataList={dataList} />
      </Content>
      <Modal
        title="ยืนยันคำสั่งซื้อ"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Row
          style={{ backgroundColor: "#f0f0f0", borderRadius: "15px" }}
          justify={"center"}
        >
          <Col span={20} style={{ paddingLeft: "5px" }}>
            <p>{product?.productName}</p>
          </Col>
          <Col span={4}>
            <p>{product?.productPrice}฿</p>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col span={4}>
            <Button
              type="primary"
              style={{
                width: "100%",
                backgroundColor: "green",
                marginTop: "1rem",
              }}
              onClick={submitBuy}
            >
              ยืนยัน
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
