import React from "react";
import { MdOutlinePeopleAlt, MdLaptop } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoAlertCircleSharp } from "react-icons/io5";

const Dashboard = () => {
  const responsiveStyle = {
    margin: "70px auto",
  };

  const circleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#047857",
    // width: "45px",
    // height: "45px",
    borderRadius: "50%",
  };

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

  return (
    <div
      className="flex flex-col items-start justify-start pt-4 pl-1 2xl:gap-2 2xl:pt-6"
      style={responsiveStyle}
    >
      <h1 className="font-bold text-2xl pb-2 pl-5 2xl:text-3xl">Dashboard</h1>
      <div className="flex max-md:flex-wrap max-xl:flex-wrap justify-center 2xl:gap-5 pl-3">
        {cards.map((card, idx) => {
          const { Icon, bgColor } = card;
          return (
            <div className="pr-2 pl-2 pt-4 ">
              <div className="bg-[#0F172B] h-34 w-60 p-5 md:h-36 md:w-44 lg:h-40 lg:w-60 xl:h-40 xl:w-[250px] 2xl:h-56 2xl:w-[470px]">
                <div className="pl-3">
                  <div
                    style={circleStyle}
                    className={`${bgColor} w-8 h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16`}
                  >
                    {card.img ? (
                      <img src={card.img} className="w-1/2 h-1/2 object-contain"></img>
                    ) : (
                      <Icon className="text-base md:text-lg lg:text-2xl xl:text-2xl 2xl:text-3xl" />
                    )}
                  </div>
                </div>
                <div className="pl-3 pt-5 text-sm md:text-sm lg:text-base xl:text-base m2xl:text-base">
                  {card.label}
                </div>
                <div className="pl-3 font-bold text-base md:text-base lg:text-xl xl:text-xl 2xl:text-xl">
                  {card.data}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
