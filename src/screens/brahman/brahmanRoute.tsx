import React from "react";
import { Routes, Route } from "react-router-dom";
import { Brahman } from "./brahman";
import { BrahmanProduct } from "./components/brahmanProduct";

interface Props {
  baseUrl: string;
}

export const BrahmanRoute: React.FC<Props> = ({ baseUrl }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Brahman baseUrl={baseUrl} />} />
        <Route path={`:brahmanId`} element={<BrahmanProduct />} />
      </Routes>
    </>
  );
};
