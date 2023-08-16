import React from "react";
import { Routes, Route } from "react-router-dom";
import { Baisri } from "./baisri";
import { BaisriStore } from "./components/baisriStore";

interface Props {
  baseUrl: string;
}

export const BaisriRoute: React.FC<Props> = ({ baseUrl }) => {
  console.log("🚀 ~ file: baisriRoute.tsx:11 ~ baseUrl:", baseUrl);
  return (
    <>
      <Routes>
        <Route path="/" element={<Baisri baseUrl={baseUrl} />} />
        <Route path={`:storeId`} element={<BaisriStore baseUrl={baseUrl} />} />
      </Routes>
    </>
  );
};
