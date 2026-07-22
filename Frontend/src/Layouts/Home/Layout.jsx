import React, { Suspense } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Home/NavBar";
import ChatBot from "./ChatBot";
import Footer from "./Footer";
import Loading from "./Loading";

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading />;

  return (
    <>
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
