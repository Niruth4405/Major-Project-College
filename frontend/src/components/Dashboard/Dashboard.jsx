// Dashboard.jsx
import React from "react";
import Navbar from "./Navbar";
import { Image as ImageIcon } from "lucide-react";
import NasaImage from "./NasaImage"; // ✅ Import NASA component

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-10">
        {/* Dashboard Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 tracking-wide">
          Image Processing Dashboard
        </h2>

        {/* Image Upload Section */}
        <div className="w-[90%] md:w-[70%] bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center justify-around gap-10 border border-gray-100">
          
          {/* Input Image (NASA Image Integration) */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-60 h-60 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center overflow-hidden bg-gray-50">
              {/* ✅ NASA Image Component inside */}
              <NasaImage />
            </div>
            <p className="text-gray-600 font-medium">Input Image (from NASA API)</p>
          </div>

          {/* Arrow / Divider */}
          <div className="text-gray-400 text-3xl font-bold hidden md:block">
            →
          </div>

          {/* Output Image Placeholder */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-60 h-60 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-gray-500 hover:bg-gray-50 transition cursor-pointer">
              <ImageIcon size={40} className="text-gray-400" />
            </div>
            <p className="text-gray-600 font-medium">Generated Output Image</p>
          </div>
        </div>

        {/* Data Section */}
        <div className="w-[90%] md:w-[70%] bg-white shadow-md rounded-2xl mt-10 p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Processed Data / Insights
          </h3>
          <p className="text-gray-600">
            This section will display processed data, analysis, or model output
            once the image is uploaded and processed.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
