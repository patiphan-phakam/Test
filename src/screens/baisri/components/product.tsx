import React from "react";
// import { useParams } from "react-router-dom";
import { ProductPreview } from "./productPreview";
import { ICardDataProduct } from "../../../components/CardCarouselProduct";
import { Row, Col, Rate } from "antd";
import CardCarouselReview, {
  ICardDataReview,
} from "../../../components/CardCarouselReview";

interface Props {
  baseUrl: string;
}

interface Props {
  baseUrl: string;
}

export const Product: React.FC<Props> = ({ baseUrl }) => {
  // const { productId } = useParams();
  const dataProduct: ICardDataProduct = {
    id: 1,
    userId: "user1",
    start: 1,
    dateTime: new Date("2023-08-16T10:00:00"),
    store: "ร้านค้าที่ 1",
    product: "สินค้าที่ 1",
    province: "กรุงเทพมหานคร",
    type: "ประเภท 1",
    price: 1000,
    sold: 20,
    description: "สินค้าหมวดหมู่ต่างๆ ที่มีคุณภาพดี มีส่วนลดพิเศษในช่วงเวลานี้",
    preview: [
      {
        id: 1,
        image:
          "https://media.istockphoto.com/id/1215068215/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%83%E0%B8%9A%E0%B8%A8%E0%B8%A3%E0%B8%B5.jpg?s=1024x1024&w=is&k=20&c=0J_yAO-ySL7iHgCK5XfDUa4ILfEOyWkheL2fAZ2Py6Q=",
      },
      {
        id: 2,
        image:
          "https://media.istockphoto.com/id/1460520172/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%9C%E0%B8%B2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%84%E0%B8%97%E0%B8%B5-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%95%E0%B8%B7%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%A1%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B8%95%E0%B9%8C%E0%B8%A1%E0%B8%B2%E0%B8%AA-kalanchoe-%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%AB%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B9%82.webp?s=1024x1024&w=is&k=20&c=qyjUDhyJhBzZzN__yE8BSudz26GR1V9wNRldmCZYSmc=",
      },
      {
        id: 3,
        image:
          "https://media.istockphoto.com/id/91745228/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%96%E0%B8%B2%E0%B8%87%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%AB%E0%B8%A1%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg?s=1024x1024&w=is&k=20&c=wTybuyPdTBYheHhaeFye59p7yAyKs0Ixz4XdGe9k-qM=",
      },
    ],
  };

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
  return (
    <>
      <div
        className="container-content"
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
      >
        <ProductPreview images={dataProduct.preview ?? []} />
        <Row>
          <Col span={24} style={{ marginTop: "0.5rem" }}>
            <p className="card-name-custom">{dataProduct.product}</p>
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
              {`| ขายแล้ว ${dataProduct.sold}`}
            </p>
          </Col>
          <Col span={24}>
            <p className="card-price-custom">{`฿${dataProduct.price}`}</p>
          </Col>
          <Col span={24}>
            <p className="text-description-custom">รายละเอียดสินค้า</p>
          </Col>
          <Col span={24}>
            <p className="text-detail-custom">
              บายศรีสามชั้น 1 ต้น องค์บายศรี 5 ทิศ องค์บายศรีชั้นแรกละ 11 นิ้ว
              ชั้นสอง 9 นิ้ว ชั้นสาม 7 นิ้ว องค์บายศรีประดับดอกไม้
              เหมาะใช้ในงานสู่ขวัญแต่งงาน งานบวชเป็นต้น
            </p>
          </Col>
          <Col span={24}>
            <p className="text-description-custom">{dataProduct.store}</p>
          </Col>
          <Col span={24}>
            <p className="text-store-detail-custom">
              เจ้าของโดย: คุณบิ๊ก คุณขวัญ
            </p>
            <p className="text-store-detail-custom">เบอร์โทร: 080-924-3654</p>
            <p className="text-store-detail-custom">
              พิกัด: ตำบลกมลาไสย อำเภอกมลาไสย จังหวัดกาฬสินธุ์
            </p>
          </Col>
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
      </div>
      <div style={{ marginBottom: "5rem" }}>
        <CardCarouselReview dataList={dataList} />
      </div>
    </>
  );
};
