import { Outlet, useNavigate } from 'react-router'
import Loading from './Loading';
import NavBar from './NavBar';
import Footer from './Footer';
import ChatBot from '../components/ChatBot';
import ScrollToTop from './ScrollToTop';

export default function AppLayout() {
  const navigate = useNavigate();
  if(navigate.state === "loading") return <Loading/>

  return (
    <>
    <ScrollToTop />
    <NavBar/>
    <Outlet/>
    <ChatBot/>
    <Footer/>
    </>
  )
}
