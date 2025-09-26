import React from "react";

const infoData = [
  {
    title: "Safe Path Details",
    content: (
      <>
        Route 1: Oak St to
        <br />
        Park Ave
      </>
    ),
  },
  {
    title: "Total Distance",
    content: (
      <span>
        <span className="text-5xl font-extrabold leading-tight">5.2</span> km
      </span>
    ),
  },
  {
    title: "Est. Time of Arrival",
    content: (
      <span>
        <span className="text-5xl font-extrabold leading-tight">18</span> mins
      </span>
    ),
  },
];

const Data = () => {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 justify-center">
      {infoData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-6 flex-1 min-w-[250px] max-w-sm transition-transform transform hover:scale-105 duration-300"
        >
          <div className="font-semibold text-xl mb-3">{item.title}</div>
          <div className="text-gray-900 text-2xl">{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Data;
