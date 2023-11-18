import { SearchOutlined } from "@ant-design/icons";
import { Row, Col, Select, Input, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Search: React.FC<{}> = () => {
  const [form] = useForm();
  const [province, setProvince] = useState([]);
  // const navigate = useNavigate();
  // const { pathname } = useLocation();

  const [searchParams] = useSearchParams();
  const provinceSearch = searchParams.get("province");
  const productNameSearch = searchParams.get("productName");
  form.setFieldsValue({
    province: provinceSearch ?? "กรุงเทพมหานคร",
    productName: productNameSearch,
  });

  const handleClickSearch = () => {
    form.validateFields().then((values: any) => {
      const dataSearch = {
        province: values.province ?? "กรุงเทพมหานคร",
        productName: values.productName ?? "",
      };

      if (dataSearch) {
        // const search = pathname.split("/");
        // if (search[1] && search[1] === "search") {
        //   window.location.href = `/search?province=${dataSearch.province}&productName=${dataSearch.productName}`;
        // }
        // navigate({
        //   pathname: "/search",
        //   search: createSearchParams(dataSearch).toString(),
        // });
        window.location.href = `/search?province=${dataSearch.province}&productName=${dataSearch.productName}`;
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
            <Form.Item name={`province`}>
              <Select
                className="search-select"
                optionFilterProp="children"
                options={province.map((p: any) => ({
                  value: p.name_th,
                  label: p.name_th,
                }))}
                showSearch
                filterOption={filterOption}
              />
            </Form.Item>
          </Col>
          <Col span={12} style={{ marginLeft: "0.5em" }}>
            <Form.Item name={`productName`}>
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
              defaultValue={provinceSearch ? provinceSearch : "กรุงเทพมหานคร"}
              optionFilterProp="children"
              options={province.map((p: any) => ({
                value: p.name_th,
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
              defaultValue={productNameSearch ? productNameSearch : ""}
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
