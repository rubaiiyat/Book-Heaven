import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mx-0 md:mx-36">
        <Header></Header>
      </div>
      <div className="flex-grow mx-5 md:mx-40">
        <Outlet></Outlet>
      </div>
      <div className="m-auto w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
