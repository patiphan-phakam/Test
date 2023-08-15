import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel from "./CardCarousel";

export const Popular: React.FC<{}> = () => {
  const dataList = [
    { title: "บายศรีห้าชั้น 1", description: "ร้านน้องบิ๊กใบตอง 1" },
    { title: "บายศรีห้าชั้น 2", description: "ร้านน้องบิ๊กใบตอง 2" },
    { title: "บายศรีห้าชั้น 3", description: "ร้านน้องบิ๊กใบตอง 3" },
    { title: "บายศรีห้าชั้น 4", description: "ร้านน้องบิ๊กใบตอง 4" },
    { title: "บายศรีห้าชั้น 5", description: "ร้านน้องบิ๊กใบตอง 5" },
    { title: "บายศรีห้าชั้น 6", description: "ร้านน้องบิ๊กใบตอง 6" },
  ];

  return (
    <>
      <Row>
        <h2 style={{ color: "#1b5e20" }}>ยอดนิยม</h2>
      </Row>
      <CardCarousel dataList={dataList} />
    </>
  );
};
