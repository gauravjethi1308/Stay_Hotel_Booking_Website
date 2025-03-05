import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet, useLocation } from "react-router-dom";

const Applayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <Header path={pathname} />
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Applayout;
