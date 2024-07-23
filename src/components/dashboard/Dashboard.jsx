import React from "react";
import { MdOutlinePeopleAlt, MdLaptop } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoAlertCircleSharp } from "react-icons/io5";
import GoogleMapComponent from "./GoogleMapComponent"; // Make sure to adjust the import path as necessary

const Dashboard1 = () => {
  const cards = [
    {
      label: "No. of Clients",
      data: "10",
      Icon: MdOutlinePeopleAlt,
      bgColor: "bg-gradient-to-tl from-yellow-600 via-yellow-500 to-yellow-400",
    },
    {
      label: "No. of Locations",
      data: "839",
      Icon: CiLocationOn,
      bgColor: "bg-gradient-to-tl from-blue-600 via-blue-500 to-blue-400",
    },
    {
      label: "No. of Devices",
      data: "942",
      Icon: MdLaptop,
      bgColor: "bg-gradient-to-tl from-purple-600 via-purple-500 to-purple-400",
    },
    {
      label: "No. of Active Devices",
      data: "874",
      img: "src/assets/img/alerts/active_device.svg",
      Icon: null,
      bgColor: "bg-gradient-to-tl from-green-600 via-green-500 to-green-400",
    },
    {
      label: "Alerts",
      data: "236",
      Icon: IoAlertCircleSharp,
      bgColor: "bg-gradient-to-tl from-red-600 via-red-500 to-red-400",
    },
  ];

  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };

  return (
    <div className="flex flex-col items-start justify-start pt-4 pl-1 2xl:gap-4 2xl:pt-6 gap-2">
      <h1 className="font-bold text-2xl pb-2 pl-5 2xl:text-3xl select-none">
        Dashboard
      </h1>
      <div className="grid grid-cols-1 gap-4 2xl:gap-6 w-full px-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
        {cards.map((card, idx) => {
          const { Icon, bgColor } = card;
          return (
            <div key={idx}>
              <div className="bg-[#0F172B] h-32 p-5 md:h-36 lg:h-36 xl:h-40 2xl:h-56 rounded-lg">
                <div className="pl-3">
                  <div
                    style={circleStyle}
                    className={`${bgColor} w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16`}
                  >
                    {card.img ? (
                      <img
                        src={card.img}
                        className="w-1/2 h-1/2 object-contain select-none"
                      ></img>
                    ) : (
                      <Icon className="w-1/2 h-1/2 object-contain" />
                    )}
                  </div>
                </div>
                <div className="pl-3 pt-4 text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-2xl select-none">
                  {card.label}
                </div>
                <div className="pl-3 font-bold text-base md:text-base lg:text-lg xl:text-lg 2xl:text-3xl select-none">
                  {card.data}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full px-5 mt-4">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Dashboard1;
