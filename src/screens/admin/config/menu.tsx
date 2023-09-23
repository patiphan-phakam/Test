import { WalletOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import { News } from "../news";
import { ProductHistory } from "../product-history";

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
    icon: <WalletOutlined />,
    label: "จัดการคำสั่งซื้อ",
    path: "product-history",
    component: (
      <>
        <Route index element={<ProductHistory />} />
      </>
    ),
  },
];
