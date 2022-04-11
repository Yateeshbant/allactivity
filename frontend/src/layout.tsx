import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./appHeader";

//this component is common for all the routes

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
};

export default Layout;
