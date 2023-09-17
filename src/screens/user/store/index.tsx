import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Image,
  message,
  Upload,
  UploadFile,
  UploadProps,
  Modal,
} from "antd";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../auth/auth";
import { IUserData } from "../../../types/user";
import { UserService } from "../../../service/user-service";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import { config } from "../../../config";
// import { useNavigate } from "react-router-dom";

export const Store: React.FC<{}> = () => {
  const { accessToken, authInstance } = useAuth();
  const [form] = Form.useForm();
  // const navigate = useNavigate();
  const userService = UserService(authInstance);
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  /* eslint-disable */
  const fetchUserProfile = async () => {
    try {
      const { data } = await userService.profile();
      if (data) {
        form.setFieldsValue({
          ...data,
        });
        setUserProfile(data);
      }
    } catch (error) {
      console.error(error);
    }
    setFileList([]);
    setPreviewImage("");
    setPreviewTitle("");
    setLoading(false);
  };

  useEffect(() => {
    fetchUserProfile();
  }, [accessToken, loading]);
  /* eslint-disable */

  const onFinish = () => {
    form.validateFields().then(async (values) => {
      if (userProfile?.userId) {
        let strBase64 = "";
        if (fileList.length > 0) {
          const base64 = await getBase64(fileList[0].originFileObj as RcFile);
          strBase64 += base64;
        }

        const dataUpdate = {
          ...values,
          storeImage: strBase64,
        };

        const { data } = await userService.update(
          userProfile?.userId,
          dataUpdate
        );
        if (data) {
          setLoading(true);
          message.success("update successfully");
        }
      }
    });
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

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

  const handleCancel = () => setPreviewOpen(false);

  return (
    <Form form={form} onFinish={onFinish}>
      <Row>
        <Col md={12}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: "5rem" }}
          >
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="fullName"
                rules={[{ required: true, message: "Please Enter fullName" }]}
              >
                <Input placeholder="fullName" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Please Enter address" }]}
              >
                <Input placeholder="address" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="subdistrict"
                rules={[
                  { required: true, message: "Please Enter subdistrict" },
                ]}
              >
                <Input placeholder="subdistrict" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="district"
                rules={[{ required: true, message: "Please Enter district" }]}
              >
                <Input placeholder="district" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="province"
                rules={[{ required: true, message: "Please Enter province" }]}
              >
                <Input placeholder="province" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="postcode"
                rules={[{ required: true, message: "Please Enter postcode" }]}
              >
                <Input placeholder="postcode" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please Enter email" }]}
              >
                <Input placeholder="email" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="phone"
                rules={[{ required: true, message: "Please Enter phone" }]}
              >
                <Input placeholder="phone" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={24}>
              <Form.Item
                name="storeName"
                rules={[{ required: true, message: "Please Enter storeName" }]}
              >
                <Input placeholder="storeName" style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col md={12} style={{ marginTop: "5rem", paddingLeft: "2rem" }}>
          <div style={{ margin: "0 1rem" }}>
            {userProfile?.storeImage && (
              <Image
                src={userProfile?.storeImage}
                height={"auto"}
                width={"30%"}
              />
            )}

            <ImgCrop rotationSlider>
              <Upload
                action={`${config.backendUrl}/product/upload`}
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={handlePreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </ImgCrop>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </div>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col span={4}>
          <Button
            type="primary"
            style={{
              width: "100%",
              backgroundColor: "green",
              marginTop: "1rem",
            }}
            htmlType="submit"
          >
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
