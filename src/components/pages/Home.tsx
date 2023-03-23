import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Users from "../sidebar/sidebarPages/User";
import "../../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-wrapper">
        <Sidebar />
        <div className="home-component">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nihil
          quia a laboriosam tempore beatae natus! Doloribus fugit perferendis
          commodii
        </div>
      </div>
    </div>
  );
}

export default Home;
