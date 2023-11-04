import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Select, Input, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Search: React.FC<{}> = () => {
  const [form] = useForm();

  const navigate = useNavigate();

  const handleClickSearch = () => {
    form.validateFields().then((values: any) => {
      const dataSearch = {
        type: values.type ?? "store",
        text: values.text ?? "",
      };
      if (dataSearch) {
        navigate({
          pathname: "/search",
          search: createSearchParams(dataSearch).toString(),
        });
      }
    });
  };

  return (
    <>
      <Form form={form}>
        <Row
          className="search-pc"
          justify={"center"}
          style={{ marginTop: "2rem" }}
        >
          <Col span={4} style={{ marginLeft: "0.5em" }}>
            <Form.Item name={`type`}>
              <Select
                className="search-select"
                defaultValue={"store"}
                optionFilterProp="children"
                options={[
                  {
                    value: "store",
                    label: "ร้านค้า",
                  },
                  {
                    value: "product",
                    label: "สินค้า",
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12} style={{ marginLeft: "0.5em" }}>
            <Form.Item name={`text`}>
              <Input placeholder="ค้นหา" allowClear className="search-input" />
            </Form.Item>
          </Col>
          <Col span={4} style={{ marginLeft: "0.5em" }}>
            <Button className="search-button" onClick={handleClickSearch}>
              <SearchOutlined style={{ color: "white" }} />
            </Button>
          </Col>
        </Row>

        <div className="search-mobile" style={{ marginTop: "1em" }}>
          <div>
            <Select
              size="small"
              className="search-select"
              defaultValue={"store"}
              optionFilterProp="children"
              options={[
                {
                  value: "store",
                  label: "ร้านค้า",
                },
                {
                  value: "product",
                  label: "สินค้า",
                },
              ]}
            />
          </div>
          <div style={{ marginLeft: "0.5em" }}>
            <Input
              size="small"
              placeholder="ค้นหา"
              allowClear
              className="search-input"
            />
          </div>
          <div style={{ marginLeft: "0.5em" }}>
            <Button
              size="small"
              className="search-button"
              onClick={handleClickSearch}
            >
              <SearchOutlined style={{ color: "white" }} />
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
