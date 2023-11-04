import { Row } from "antd";
import CardCarouselReview from "../../../components/CardCarouselReview";
import { CommentService } from "../../../service/comment.service";
import { axiosBackend } from "../../../config/axiosBackend";
import { useEffect, useState } from "react";

export const Review: React.FC<{}> = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const commentService = CommentService(axiosBackend);
    const getComment = async () => {
      const res = await commentService.findAll();
      if (res.data) {
        setData(res.data);
      }
    };
    getComment();
  }, []);
  return (
    <>
      <Row style={{ display: "flex" }}>
        <h2 style={{ color: "#028910", marginLeft: "1rem" }}>รีวิวจากลูกค้า</h2>
        <p
          style={{
            fontSize: "16px",
            marginTop: "20px",
            marginLeft: "5px",
            color: "rgba(0, 0, 0, 0.35)",
          }}
        >{`(${data.length})`}</p>
      </Row>
      <CardCarouselReview dataList={data} />
    </>
  );
};
