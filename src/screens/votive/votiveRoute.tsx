import React from "react";
import { Routes, Route } from "react-router-dom";
import { Votive } from "./votive";
import { VotiveProduct } from "./components/votiveProduct";

interface Props {
  baseUrl: string;
}

export const VotiveRoute: React.FC<Props> = ({ baseUrl }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Votive baseUrl={baseUrl} />} />
        <Route path={`:votiveId`} element={<VotiveProduct />} />
      </Routes>
    </>
  );
};
