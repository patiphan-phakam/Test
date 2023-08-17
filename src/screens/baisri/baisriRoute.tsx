import React from "react";
import { Routes, Route } from "react-router-dom";
import { Baisri } from "./baisri";
import { BaisriStore } from "./components/baisriStore";
import { Product } from "./components/product";

interface Props {
  baseUrl: string;
}

export const BaisriRoute: React.FC<Props> = ({ baseUrl }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Baisri baseUrl={baseUrl} />} />
        <Route path={`:storeId`} element={<BaisriStore baseUrl={baseUrl} />} />
        <Route
          path={`/product/:productId`}
          element={<Product baseUrl={baseUrl} />}
        />
      </Routes>
    </>
  );
};
