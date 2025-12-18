import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";
import Calender from "./Calender";
import ChatBot from "./ChatBot";
import Footer from "./Footer";
import Loading from "./Loading";
import ScrollToTop from "../Components/ScrollToTop";

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <ScrollToTop />
      <Calender />
      <NavBar />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Layout;
