import {
  Modal,
  Row,
  Col,
  Input,
  Button,
  Form,
  Upload,
  UploadFile,
  UploadProps,
  Image,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { axiosBackend } from "../../../../config/axiosBackend";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ImgCrop from "antd-img-crop";
import { PlusOutlined } from "@ant-design/icons";
import { config } from "../../../../config";
import { RcFile } from "antd/es/upload";
import { NewsService } from "../../../../service/news-service";
import { IUserData } from "../../../../types/user";

export interface IEditProps {
  configModal: any;
  isOpen: boolean;
  setOpen: (boolean: boolean) => void;
  newsId: string | undefined;
  setLoading: (status: boolean) => void;
  userProfile: IUserData | undefined;
}

export const NewsForm: React.FC<IEditProps> = ({
  configModal,
  isOpen,
  setOpen,
  newsId,
  setLoading,
  userProfile,
}) => {
  const [form] = Form.useForm();
  const newsService = NewsService(axiosBackend);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  /* eslint-disable */
  useEffect(() => {
    console.log(configModal);
    form.setFieldsValue({
      ...configModal,
    });
  }, [configModal]);

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      if (!configModal.update) {
        const filesBase64 = [];

        for (const file of fileList) {
          const base64 = await getBase64(file.originFileObj as RcFile);
          filesBase64.push(base64);
        }

        const dataCreate = {
          userId: userProfile?.userId,
          title: values.title,
          content: values.content,
          image: filesBase64[0],
        };

        const { data } = await newsService.create(dataCreate);
        if (data) {
          message.success("create successfully");
          setOpen(false);
          setFileList([]);
          form.resetFields();
          setLoading(true);
        }
      }
      if (configModal.update) {
        const filesBase64 = [];

        for (const file of fileList) {
          const base64 = await getBase64(file.originFileObj as RcFile);
          filesBase64.push(base64);
        }

        const dataUpdate = {
          userId: userProfile?.userId,
          title: values.title,
          content: values.content,
          image: filesBase64[0] || configModal.image,
        };
        const { data } = await newsService.update(
          configModal.newsId,
          dataUpdate
        );
        if (data) {
          message.success("update successfully");
          setOpen(false);
          setFileList([]);
          form.resetFields();
          setLoading(true);
        }
      }
    });
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <Modal
      title={`${configModal.titleModal}`}
      open={isOpen}
      onCancel={() => {
        setOpen(false);
        setFileList([]);
        form.resetFields();
      }}
      footer={null}
    >
      <Row justify={"center"}>
        <Col span={24} style={{ display: "flex", margin: "4px 2px" }}>
          {configModal?.image && fileList.length === 0 ? (
            <Image
              src={`${config.backendUrl}/image/${configModal?.image}`}
              height={"auto"}
              width={200}
            />
          ) : (
            <></>
          )}
          <ImgCrop rotationSlider>
            <Upload
              action={`${config.backendUrl}/product/upload`}
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
          </ImgCrop>
        </Col>
      </Row>
      <Form form={form} onFinish={onFinish} layout={"vertical"}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={24}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter Title" }]}
            >
              <Input placeholder="Title" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={24}>
            <Form.Item
              name="content"
              label="Content"
              rules={[{ required: true, message: "Please enter Content" }]}
            >
              <Input.TextArea placeholder="Content" rows={10} />
            </Form.Item>
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
            Save
          </Button>
        </Row>
      </Form>
    </Modal>
  );
};
