import React from "react";
import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
