import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Loading from "../Components/Loading";

const MainLayOut = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1 bg-blue-50">
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
