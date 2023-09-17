import { WalletOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import { News } from "../news";

export const MenuItemsUser = [
  {
    key: "news",
    icon: <WalletOutlined />,
    label: "ตั้งค่าข่าวสาร",
    path: "news",
    component: (
      <>
        <Route index element={<News />} />
      </>
    ),
  },
];
