import React from "react";
// import { useParams } from "react-router-dom";
import { Row, Col, Rate, Button } from "antd";
import CardCarouselReview, {
  ICardDataReview,
} from "../../../components/CardCarouselReview";
// import { ProductService } from "../../../service/product-service";
// import { axiosBackend } from "../../../config/axiosBackend";
// import { IProductData, IProductDataImage } from "../../../types/product";
// import { UserService } from "../../../service/user-service";
// import { IStoreData } from "../../../types/store";
import { ProductPreview } from "../../baisri/components/productPreview";

export const VotiveProduct: React.FC = () => {
  // const { brahmanId } = useParams();
  // const [product, setProduct] = useState<IProductData | undefined>();
  // const [store, setStore] = useState<IStoreData>();
  // useEffect(() => {
  //   const productService = ProductService(axiosBackend);
  //   const userService = UserService(axiosBackend);

  //   const getProduct = async () => {
  //     if (brahmanId) {
  //       const resProduct = await productService.findById(brahmanId);
  //       if (resProduct.data) {
  //         setProduct(resProduct.data);
  //         const resStore = await userService.findById(resProduct.data.userId);
  //         if (resStore.data) {
  //           setStore(resStore.data);
  //         }
  //       }
  //     }
  //   };

  //   getProduct();
  // }, [brahmanId]);

  const dataList: ICardDataReview[] = [
    {
      id: 1,
      userId: "user123",
      name: "จอห์น โด",
      star: 4,
      dateTime: new Date("2023-08-16T10:30:00"),
      store: "ร้าน A",
      product: "ผลิตภัณฑ์ X",
      review: "ประสบการณ์ที่ดี! จะกลับมาอีกแน่นอน",
    },
    {
      id: 2,
      userId: "user456",
      name: "เจน สมิธ",
      star: 5,
      dateTime: new Date("2023-08-17T14:00:00"),
      store: "ร้าน B",
      product: "ผลิตภัณฑ์ Y",
      review: "บริการเยี่ยมยอดและคุณภาพสินค้าดีเยี่ยม",
    },
    {
      id: 3,
      userId: "user789",
      name: "อลิส จอห์นสัน",
      star: 3,
      dateTime: new Date("2023-08-18T09:15:00"),
      store: "ร้าน C",
      product: "ผลิตภัณฑ์ Z",
      review: "มีประสบการณ์การช้อปปิ้งที่เพลิดเพลิน",
    },
    {
      id: 4,
      userId: "user101",
      name: "บ็อบ วิลเลียมส์",
      star: 4,
      dateTime: new Date("2023-08-19T11:45:00"),
      store: "ร้าน D",
      product: "ผลิตภัณฑ์ W",
      review: "ประทับใจกับสินค้าหลากหลายที่มีให้เลือก",
    },
    {
      id: 5,
      userId: "user202",
      name: "อีวา มาร์ติเนซ",
      star: 5,
      dateTime: new Date("2023-08-20T16:30:00"),
      store: "ร้าน E",
      product: "ผลิตภัณฑ์ V",
      review: "พนักงานเป็นมิตรและเป็นประโยชน์ ชอบสินค้า!",
    },
  ];

  const product = {
    id: 1,
    productAvgStar: 4.5,
    productDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    productId: "ABC123",
    productName: "Example Product",
    productPrice: 59.99,
    productSold: 150,
    productType: 2,
    productTypeShow: 1,
    productImages: [
      {
        id: 27,
        productImageId: "205e9889-496b-41d8-a390-ba2fcd0a180f",
        productImageLevel: 1,
        productImageSource:
          "https://images.unsplash.com/photo-1613759375165-1cd532c35738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      },
    ],
    userId: "user123",
    updateDate: "2023-08-31",
    createDate: "2023-08-01",
  };

  return (
    <>
      <div
        className="container-content"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
      >
        {product && (
          <>
            <ProductPreview images={product.productImages ?? []} />
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

              {/* {store && (
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
              )} */}
            </Row>
            <Row>
              <Button className="green-button">ซื้อ</Button>
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
      </div>
      <div style={{ marginBottom: "5rem" }}>
        <CardCarouselReview dataList={dataList} />
      </div>
    </>
  );
};
