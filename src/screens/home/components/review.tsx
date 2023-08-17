import { Row } from "antd";
import CardCarouselReview, {
  ICardDataReview,
} from "../../../components/CardCarouselReview";

export const Review: React.FC<{}> = () => {
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
      <div style={{ marginBottom: "2rem" }}>
        <Row style={{ display: "flex" }}>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>
            รีวิวจากลูกค้า
          </h2>
          <p
            style={{
              fontSize: "16px",
              marginTop: "20px",
              marginLeft: "5px",
              color: "rgba(0, 0, 0, 0.35)",
            }}
          >{`(${dataList.length})`}</p>
        </Row>
        <CardCarouselReview dataList={dataList} />
      </div>
    </>
  );
};
