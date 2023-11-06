import { Col, Row, Skeleton } from "antd";
// import Carousel from "react-multi-carousel";

const CarouselCardSkeleton = () => {
  const array = Array.from({ length: 3 }, (_, index) => index + 1);
  return (
    <>
      <Row>
        {array.map((item, i) => (
          // <Col lg={6} md={8} sm={12} key={i + 1} style={{ margin: "2em" }}>
          //   <Card className="card-product" key={i} cover={<Skeleton.Image />}>
          //     <Row>
          //       <Skeleton.Input style={{ width: 200 }} />
          //     </Row>
          //     <Row>
          //       <Col md={6}>
          //         <Skeleton.Input style={{ width: 80 }} />
          //       </Col>
          //     </Row>
          //   </Card>
          // </Col>
          <Col lg={6} md={8} sm={12} key={i + 1} style={{ margin: "2em" }}>
            <div key={i} className="card-product-home">
              <div className="image-container">
                <Skeleton.Input style={{ width: 200 }} />
                <div className="image-overlay" />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              ></div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CarouselCardSkeleton;
