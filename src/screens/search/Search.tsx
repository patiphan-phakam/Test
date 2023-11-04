import { Col, Empty, Row, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Content } from "antd/es/layout/layout";
import { useSearchParams } from "react-router-dom";
export const Search: React.FC<{}> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const text = searchParams.get("text");

  /* eslint-disable */
  const fetchData = async () => {
    try {
      if (text) {
        setData([{ product: text }]);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [type, text]);

  return (
    <>
      <Content className="content">
        {loading ? (
          <Spin />
        ) : (
          <>
            {data.length > 0 ? (
              <>
                {data.map((i: any) => (
                  <div className="card-home">
                    <Row>{i.product}</Row>
                  </div>
                ))}
              </>
            ) : (
              <Row justify={"center"} style={{ margin: "4rem 0" }}>
                <Col span={10}>
                  <Empty description={"ขออภัยค่ะ ไม่พบข้อมูลที่คุณกำลังหา"} />
                </Col>
              </Row>
            )}
          </>
        )}
      </Content>
    </>
  );
};
