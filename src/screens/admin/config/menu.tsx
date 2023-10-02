import {
  UnorderedListOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Route } from "react-router-dom";
import { News } from "../news";
import { ProductHistory } from "../product-history";
import { Users } from "../users";

export const MenuItemsAdmin = [
  {
    key: "news",
    icon: <WalletOutlined />,
    label: "จัดการข่าวสาร",
    path: "news",
    component: (
      <>
        <Route index element={<News />} />
      </>
    ),
  },
  {
    key: "product-history",
    icon: <UnorderedListOutlined />,
    label: "จัดการคำสั่งซื้อ",
    path: "product-history",
    component: (
      <>
        <Route index element={<ProductHistory />} />
      </>
    ),
  },
  {
    key: "users",
    icon: <UserOutlined />,
    label: "จัดการผู้ใช้งาน",
    path: "users",
    component: (
      <>
        <Route index element={<Users />} />
      </>
    ),
  },
];
