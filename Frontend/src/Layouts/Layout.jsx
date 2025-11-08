import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Calender from "./Calender";
import ChatBot from "./ChatBot";
import Footer from "./Footer"; 
import Loading from "./Loading"; 

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <>
      <Calender />
      <NavBar />
      <main>
      <Outlet />
      </main>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Layout;
