import { WalletOutlined, ProfileOutlined } from "@ant-design/icons";
import { Route } from "react-router-dom";
import { Store } from "../store";
import { Product } from "../product";

export const MenuItemsUser = [
  {
    key: "store",
    icon: <WalletOutlined />,
    label: "ตั้งค่าร้าน",
    path: "store",
    component: (
      <>
        <Route index element={<Store />} />
      </>
    ),
  },
  {
    key: "product",
    icon: <ProfileOutlined />,
    label: "ตั้งค่าสินค้า",
    path: "product",
    component: (
      <>
        <Route index element={<Product />} />
      </>
    ),
  },
];
