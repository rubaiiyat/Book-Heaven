import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="mx-0 md:mx-36">
        <Header></Header>
      </div>
      <div className="mx-5 md:mx-40">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
