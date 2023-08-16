import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Error: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button className="green-button" onClick={() => navigate("/")}>
          Back Home
        </Button>
      }
    />
  );
};
