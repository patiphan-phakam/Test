import { Card, Col, Row, Skeleton } from "antd";
import "react-multi-carousel/lib/styles.css";

export const ProductSkeleton: React.FC<{}> = () => {
  const array = Array.from({ length: 4 }, (_, index) => index + 1);
  return (
    <>
      <Row>
        {array.map((item: any, index: number) => (
          <Col lg={6} md={8} sm={12} key={index + 1}>
            <Card
              className="card-product card-product-list"
              key={item.id}
              cover={
                <>
                  <Skeleton.Input style={{ width: 200, height: 200 }} />
                </>
              }
            >
              <Row>
                <Skeleton.Input style={{ width: 200 }} />
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
