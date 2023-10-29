import { Card, Col, Row, Skeleton } from "antd";
// import Carousel from "react-multi-carousel";

const CarouselCardSkeleton = () => {
  const array = Array.from({ length: 5 }, (_, index) => index + 1);
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     partialVisibilityGutter: 60,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //     partialVisibilityGutter: 50,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     partialVisibilityGutter: 30,
  //   },
  // };

  return (
    <>
      <div style={{ margin: "1rem 5rem" }}>
        <Row>
          {array.map((item, i) => (
            <Col lg={6} md={8} sm={12} key={i + 1} style={{ margin: "2em" }}>
              <Card className="card-product" key={i} cover={<Skeleton.Image />}>
                <Row>
                  <Skeleton.Input style={{ width: 200 }} />
                </Row>
                <Row>
                  <Col md={6}>
                    <Skeleton.Input style={{ width: 80 }} />
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CarouselCardSkeleton;
