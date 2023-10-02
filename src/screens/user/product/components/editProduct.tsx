import {
  Modal,
  Row,
  Col,
  Input,
  Button,
  Form,
  Upload,
  UploadProps,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { ProductService } from "../../../../service/product-service";
import { axiosBackend } from "../../../../config/axiosBackend";
import { config } from "../../../../config";
import { PlusOutlined } from "@ant-design/icons";
import { RcFile, UploadFile } from "antd/es/upload";

export interface IEditProps {
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
  productId: string | undefined;
  onSave: (data: any) => void;
}

export const EditProduct: React.FC<IEditProps> = ({
  isOpen,
  setOpen,
  productId,
  onSave,
}) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<any>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const productService = ProductService(axiosBackend);

  // const base64StringToFile = (base64String: any, filename: any) => {
  //   const arr = base64String.split(",");
  //   const mime = arr[0].match(/:(.*?);/)[1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   const file = new File([u8arr], filename, { type: mime });
  //   return file;
  // };

  // const getImageExtensionFromBase64 = (base64String: string) => {
  //   const dataUriRegex = /^data:image\/(\w+);base64,/;
  //   const match = base64String.match(dataUriRegex);
  //   if (match && match[1]) {
  //     return match[1];
  //   }
  //   return "unknown";
  // };

  /* eslint-disable */
  const getProduct = async (id: string) => {
    setLoadingUpdate(true);
    const { data } = await productService.findById(id);
    setFileList([]);
    if (data) {
      form.setFieldsValue({
        ...data,
      });
      data.productImages.forEach((image: any, index: number) => {
        const base64String = image.productImageSource;
        const filename = image.productImageId;
        setFileList((prev: any) => [
          ...prev,
          { uid: index - 1, name: filename, status: "done", url: base64String },
        ]);
      });
      setLoadingUpdate(false);
    }
  };

  useEffect(() => {
    if (productId) {
      //   getProductImage(productId);
      getProduct(productId);
    }
  }, [productId]);

  /* eslint-disable */

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      const filesBase64 = [];
      if (fileList.length > 0) {
        for (const file of fileList) {
          if (file.originFileObj) {
            const base64 = await getBase64(file.originFileObj as RcFile);
            filesBase64.push(base64);
          } else {
            filesBase64.push(file.url);
          }
        }
      }

      if (fileList.length === 0) {
        message.error("กรุณาเพิ่มรูปภาพ");
        return;
      }

      const dataUpdate = {
        dataUpdate: {
          ...values,
        },
        dataImage: filesBase64,
      };

      onSave(dataUpdate);
    });
  };

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

  return (
    <Modal
      title="Edit Product"
      open={isOpen}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout={"vertical"}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <Form.Item
              name="productName"
              label="Product Name"
              rules={[{ required: true, message: "Please enter product name" }]}
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
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
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
            loading={loadingUpdate}
          >
            Save
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};
