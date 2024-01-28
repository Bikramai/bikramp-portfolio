/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from 'react';
import './App.scss';
import './components/style/main.css'
import { useLocation } from 'react-router-dom';
import NavHeader from "./components/header/Navbar";
import Footer from "./components/footer/footer";
import Index from "./components/pages";
import ScrollToTopButton from "./components/pages/scrollToTop";
import SocialMediaLinks from "./components/pages/socialMediaLinks";

function App() {
  const [showLoader, setShowLoader] = useState(true)
  const { pathname } = useLocation();

  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1600);
  }, []);

  return showLoader ? (
    <main className='h-screen flex flex-col justify-center items-center'>
      <span className="loader"></span>
    </main>
  ) : (
    <>
      <ScrollToTop />
      <NavHeader />
      <Index />
      <Footer />
      <SocialMediaLinks />
      <ScrollToTopButton />
    </>
  );
}
export default App;
