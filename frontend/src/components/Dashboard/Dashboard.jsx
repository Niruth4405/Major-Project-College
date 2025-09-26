// Dashboard.jsx
import React from "react";
import Navbar from "./Navbar";
import Images from "./Images";
import Data from "./Data";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="w-full md:w-[70%] m-auto flex flex-col items-center mt-4 gap-5 justify-center">
        <div className="w-full mb-6 md:mb-0">
          <Images />
        </div>
        <div className="md:w-2/5 w-full">
          <Data />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
