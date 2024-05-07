import { useState, useEffect } from "react";
import Navbar from "../Navbar";
import React from "react";
import ScrollTop from "../ScrollTop";
import DefaultLayout from "../Layouts/DefaultLayout";
import Footer from "../Footer";
import OurTeam from "../OurTeam";
import ContactUs from "../ContactUs";
import About from "../Sections/About";
import { Expertise } from "../Sections/Expertise";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Services from "../Sections/Services";

export const Index = ({ toggleDarkMode, isDarkMode }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100); // Adjust the value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`relative ${isDarkMode && "dark"} `}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <DefaultLayout>
        <About id="about" />
        <Expertise id="expertise" />
        <OurTeam id="our_team" />
        <Services id="services" />
      </DefaultLayout>
      <Footer />
      <ContactUs />
      <ScrollTop visible={visible} />
      <ToastContainer pauseOnFocusLoss={false} />
    </div>
  );
};
