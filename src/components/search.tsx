import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Select, Input, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Search: React.FC<{}> = () => {
  const [form] = useForm();
  const [province, setProvince] = useState([]);
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

  const fecthProvince = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json"
    );
    if (res.data) {
      setProvince(res.data);
    }
  };

  useEffect(() => {
    fecthProvince();
  }, []);

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Form form={form} style={{ width: "100%" }}>
        <Row
          className="search-pc"
          justify={"center"}
          style={{ paddingTop: "2rem" }}
        >
          <Col span={4} style={{ marginLeft: "0.5em" }}>
            <Form.Item name={`type`}>
              <Select
                className="search-select"
                defaultValue={1}
                optionFilterProp="children"
                options={province.map((p: any) => ({
                  value: p.id,
                  label: p.name_th,
                }))}
                showSearch
                filterOption={filterOption}
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
              defaultValue={1}
              optionFilterProp="children"
              options={province.map((p: any) => ({
                value: p.id,
                label: p.name_th,
              }))}
              showSearch
              filterOption={filterOption}
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
