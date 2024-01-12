import React from "react";
import "./Homescreen.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Functionalities from "./BannerComponents/Functionalities";
import Offress from "./BannerComponents/Offress";
import Footer from "./Footer/Footer";

function Homescreen() {
  return (
    <div className="navbar">
      <div className="navhome">
        <Navbar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homescreen;
