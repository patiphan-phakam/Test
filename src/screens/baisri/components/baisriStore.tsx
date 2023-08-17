import { Col, Row } from "antd";
import React from "react";
import CardCarouselProduct from "../../../components/CardCarouselProduct";
import { useParams } from "react-router-dom";

interface Props {
  baseUrl: string;
}

export const BaisriStore: React.FC<Props> = ({ baseUrl }) => {
  const { storeId } = useParams();
  const dataList = [
    {
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
      description:
        "สินค้าหมวดหมู่ต่างๆ ที่มีคุณภาพดี มีส่วนลดพิเศษในช่วงเวลานี้",
      preview: [
        { id: 1, image: "image-url-1.jpg" },
        { id: 2, image: "image-url-2.jpg" },
        { id: 3, image: "image-url-3.jpg" },
      ],
    },
    {
      id: 2,
      userId: "user2",
      start: 2,
      dateTime: new Date("2023-08-17T14:30:00"),
      store: "ร้านค้าที่ 2",
      product: "สินค้าที่ 2",
      province: "นนทบุรี",
      type: "ประเภท 2",
      price: 1500,
      sold: 15,
      description: "สินค้าราคาประหยัดที่ไม่ควรพลาด",
      preview: [
        { id: 4, image: "image-url-4.jpg" },
        { id: 5, image: "image-url-5.jpg" },
      ],
    },
    {
      id: 3,
      userId: "user1",
      start: 3,
      dateTime: new Date("2023-08-18T09:15:00"),
      store: "ร้านค้าที่ 3",
      product: "สินค้าที่ 3",
      province: "สมุทรปราการ",
      type: "ประเภท 1",
      price: 800,
      sold: 30,
      description: "สินค้าคุณภาพสูงสำหรับคนรักการเป็นตัวตน",
      preview: [
        { id: 6, image: "image-url-6.jpg" },
        { id: 7, image: "image-url-7.jpg" },
      ],
    },
    {
      id: 4,
      userId: "user3",
      start: 4,
      dateTime: new Date("2023-08-19T16:45:00"),
      store: "ร้านค้าที่ 4",
      product: "สินค้าที่ 4",
      province: "ปทุมธานี",
      type: "ประเภท 3",
      price: 2000,
      sold: 10,
      description: "สินค้าเฉพาะกิจที่ไม่มีใครที่จะมี",
      preview: [
        { id: 8, image: "image-url-8.jpg" },
        { id: 9, image: "image-url-9.jpg" },
      ],
    },
    {
      id: 5,
      userId: "user2",
      start: 5,
      dateTime: new Date("2023-08-20T12:00:00"),
      store: "ร้านค้าที่ 5",
      product: "สินค้าที่ 5",
      province: "นครปฐม",
      type: "ประเภท 2",
      price: 1200,
      sold: 25,
      description: "สินค้าใหม่และเทคโนโลยีล้ำสมัย",
      preview: [
        { id: 10, image: "image-url-10.jpg" },
        { id: 11, image: "image-url-11.jpg" },
      ],
    },
  ];
  return (
    <>
      <div className="container-content" style={{ marginBottom: "3rem" }}>
        <Row>
          <Col md={24}>
            <p style={{ marginLeft: "5rem", fontSize: "20px" }}>
              {dataList[0].store}
            </p>
          </Col>
        </Row>
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>
            บายศรีใบตองสด {storeId}
          </h2>
        </Row>
        <CardCarouselProduct dataList={dataList} baseUrl={baseUrl} />
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>บายศรีแห้ง</h2>
        </Row>
        <CardCarouselProduct dataList={dataList} baseUrl={baseUrl} />
        <Row>
          <h2 style={{ color: "#028910 ", marginLeft: "5rem" }}>ชุดบวงสรวง</h2>
        </Row>
        <CardCarouselProduct dataList={dataList} baseUrl={baseUrl} />
      </div>
    </>
  );
};
