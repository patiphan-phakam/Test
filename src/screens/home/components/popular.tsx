import { Row } from "antd";
import "react-multi-carousel/lib/styles.css";
import CardCarousel, { ICardData } from "../../../components/CardCarousel";

export const Popular: React.FC<{}> = () => {
  const dataList: ICardData[] = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" },
    { id: 6, title: "Card 6", description: "Description 6" },
  ];

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Row>
          <h2 style={{ color: "#028910", marginLeft: "5rem" }}>ยอดนิยม</h2>
        </Row>
        <CardCarousel dataList={dataList} />
      </div>
    </>
  );
};
