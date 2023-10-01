import { Row, Col, Table, Popconfirm, Space, message, Button } from "antd";
import Link from "antd/es/typography/Link";
import React, { useEffect, useState } from "react";
import { NewsService } from "../../../service/news-service";
import { axiosBackend } from "../../../config/axiosBackend";
import { NewsForm } from "./components/newsForn";
import { UserService } from "../../../service/user-service";
import { IUserData } from "../../../types/user";
// import { useAuth } from "../../../auth/auth";
// import { useNavigate } from "react-router-dom";

export const News: React.FC<{}> = () => {
  // const { signout } = useAuth();
  // const navigate = useNavigate();
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [newsId, setNewsId] = useState<string | undefined>();
  const [userProfile, setUserProfile] = useState<IUserData | undefined>();
  const [configModal, setConfigModal] = useState<any>({
    title: "Add News",
    update: false,
  });

  const newsService = NewsService(axiosBackend);

  /* eslint-disable */
  const fetchData = async () => {
    try {
      const { data } = await newsService.getAll();
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

  const fetchUserProfile = async (token: string) => {
    try {
      axiosBackend.defaults.headers["Authorization"] = `Bearer ${token}`;
      const userService = UserService(axiosBackend);
      const res = await userService.profile();
      if (res && res.data) {
        setUserProfile(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchUserProfile(accessToken);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [loading]);

  const handleDelete = async (id: string) => {
    const { data } = await newsService.delete(id);
    if (data) {
      message.success("delete successfully");
      setLoading(true);
    }
  };

  /* eslint-disable */
  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Detail",
      dataIndex: "newsId",
      key: "newsId",
      render: (newId: string, row: any, index: number) => (
        <>
          <Space>
            <Link
              onClick={() => {
                setNewsId(newId);
                setConfigModal({
                  titleModal: "Edit News",
                  update: true,
                  ...row,
                });
                setIsModal(true);
              }}
            >
              แก้ไข
            </Link>
            /
            <Popconfirm
              title="ยืนยันการลบ"
              description={row.productName}
              okText="ยืนยัน"
              cancelText="ยกเลิก"
              onConfirm={() => handleDelete(newId)}
            >
              <Link className="text-red">ลบ</Link>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  return (
    <>
      <Row justify={"end"}>
        <Button
          type="primary"
          style={{
            width: "5%",
            backgroundColor: "green",
            marginTop: "1rem",
          }}
          onClick={() => {
            setConfigModal({
              titleModal: "Add News",
            });
            setIsModal(true);
          }}
          disabled={userProfile?.userLevel !== 0 ? true : false}
        >
          Add
        </Button>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            key={"id"}
            scroll={{ x: true }}
            dataSource={dataSource}
            columns={columns}
          />
        </Col>
      </Row>
      <NewsForm
        configModal={configModal}
        isOpen={isModal}
        setOpen={setIsModal}
        newsId={newsId}
        setLoading={setLoading}
        userProfile={userProfile}
      />
    </>
  );
};
