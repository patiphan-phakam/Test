import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import Link from "antd/es/typography/Link";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../auth/auth";

import { ProductService } from "../../../service/product-service";
import { PlusOutlined } from "@ant-design/icons";
import { RcFile } from "antd/es/upload";
import { EditProduct } from "./components/editProduct";
import { config } from "../../../config";

export const Product: React.FC<{}> = () => {
  const [form] = Form.useForm();
  const { accessToken, authInstance } = useAuth();
  const productService = ProductService(authInstance);
  const [dataSource, setDataSource] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [editModal, setEditModal] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>();

  /* eslint-disable */
  const fetchUserProfile = async () => {
    try {
      const { data } = await productService.getByUser();
      if (data) {
        setDataSource(
          data.map((data: any, index: number) => ({ ...data, key: index + 1 }))
        );
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [accessToken, loading]);
  /* eslint-disable */

  const handleDelete = async (productId: string) => {
    const { data } = await productService.delete(productId);
    if (data) {
      message.success("delete product successfully");
      setLoading(true);
    }
  };

  const productType = [
    {
      value: "1",
      label: "บายศรี",
    },
    {
      value: "2",
      label: "หมอพราหมณ์",
    },
    {
      value: "3",
      label: "บน/แก้บน",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (text: string, row: any, index: number) => index + 1,
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      width: "60%",
    },
    {
      title: "Action",
      dataIndex: "productId",
      key: "productId",
      width: "25%",
      render: (productId: string, row: any) => {
        return (
          <>
            <Space>
              <Link
                onClick={() => {
                  setProductId(productId);
                  setEditModal(true);
                }}
              >
                แก้ไข
              </Link>
              /
              <Popconfirm
                title="ยืนยันการลบสินค้า"
                description={row.productName}
                okText="ยืนยัน"
                cancelText="ยกเลิก"
                onConfirm={() => handleDelete(productId)}
              >
                <Link className="text-red">ลบ</Link>
              </Popconfirm>
            </Space>
          </>
        );
      },
    },
  ];

  const showModal = () => {
    form.resetFields();
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleCancelAction = () => {
    form.resetFields();
    setFileList([]);
    setIsModalOpen(false);
  };

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      const filesBase64 = [];

      for (const file of fileList) {
        const base64 = await getBase64(file.originFileObj as RcFile);
        filesBase64.push(base64);
      }

      if (fileList.length === 0) {
        message.error("กรุณาเพิ่มรูปภาพอย่างน้อย 1 รูป");
        return;
      }

      const dataCreate = {
        ...values,
        imageBase64: filesBase64,
        productType: values.productType.value,
      };

      const { data } = await productService.createProduct(dataCreate);
      if (data) {
        message.success("create product successfully");
        setLoading(true);
        setIsModalOpen(false);
      }
    });
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCancel = () => setPreviewOpen(false);

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const onEdit = async (dataUpdate: any) => {
    if (productId) {
      const { data } = await productService.updateProduct(
        productId,
        dataUpdate
      );
      if (data) {
        message.success("update product successfully");
        setLoading(true);
        setEditModal(false);
      }
    }
  };

  return (
    <>
      <Row justify={"end"}>
        <Button className="green-button" onClick={showModal}>
          เพิ่ม
        </Button>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            key={"id"}
            scroll={{ x: true }}
            dataSource={dataSource}
            columns={columns}
            loading={loading}
          />
        </Col>
      </Row>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onCancel={handleCancelAction}
        footer={null}
      >
        <Form form={form} onFinish={onFinish} layout={"vertical"}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="productName"
                label="Product Name"
                rules={[
                  { required: true, message: "Please enter product name" },
                ]}
              >
                <Input placeholder="Product Name" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="productDetail"
                label="Product Detail"
                rules={[
                  { required: true, message: "Please enter product detail" },
                ]}
              >
                <Input.TextArea placeholder="Product Detail" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="productType"
                label="Product Type"
                rules={[
                  { required: true, message: "Please enter product type" },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
                  labelInValue
                  placeholder={"Product Type"}
                  options={productType}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="productPrice"
                label="Product Price"
                rules={[
                  { required: true, message: "Please enter product price" },
                ]}
              >
                <Input type="number" placeholder="Product Price" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Upload
                action={`${config.backendUrl}/product/upload`}
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onPreview={handlePreview}
                accept=".png,.jpeg,.jpg"
              >
                {fileList.length >= 5 ? null : uploadButton}
              </Upload>
              <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
              >
                <img
                  alt="example"
                  style={{ width: "100%" }}
                  src={previewImage}
                />
              </Modal>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Button
              type="primary"
              style={{
                width: "20%",
                backgroundColor: "green",
                marginTop: "1rem",
              }}
              htmlType="submit"
            >
              Add
            </Button>
          </Row>
        </Form>
      </Modal>

      <EditProduct
        isOpen={editModal}
        setOpen={setEditModal}
        productId={productId}
        onSave={onEdit}
      />
    </>
  );
};
