import React from "react";
import { MdOutlinePeopleAlt, MdLaptop } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoAlertCircleSharp } from "react-icons/io5";
import GoogleMapComponent from "./GoogleMapComponent";
import "./dashboardStyle.css";

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
    <div className="component-body flex flex-col items-start justify-start px-5">
      <h1 className="page-header font-bold select-none">
        Dashboard
      </h1>
      <div className="grid w-full card-container">
        {cards.map((card, idx) => {
          const { Icon, bgColor } = card; 
          return (
            <div key={idx}>
              <div className="bg-[#0F172B] card p-5 rounded-lg">
                <div className="pl-3">
                  <div
                    style={circleStyle}
                    className={`${bgColor} circle-dimension`}
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
                <div className="pl-3 pt-4 card-label select-none">
                  {card.label}
                </div>
                <div className="pl-3 pt-3 font-bold card-data select-none">
                  {card.data}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Dashboard1;
