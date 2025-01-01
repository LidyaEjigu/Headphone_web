import React from "react";
import Navbar from "./components/Navbar/navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Navbar/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import BannerText from "./components/Banner/BannerText";
import Blogs from "./components/Blogs/Blogs";
import Footor from "./components/Footor/Footor";
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={
          {
            backgroundColor: "white",
            zIndex: 999,
            followSpeed: 1.5
          }
        }
      >
        <Navbar />
        <Hero />

      </UpdateFollower>
      <UpdateFollower
        mouseOptions={
          {
            backgroundColor: "black",
            zIndex: 999,
            followSpeed: 1.5
          }
        }
      >
        <Services />
        <Banner/>
        <BannerText/>
        <Blogs/>
        <Footor/>
       
      </UpdateFollower>
     
    
    </main>
  )
};
export default App;
