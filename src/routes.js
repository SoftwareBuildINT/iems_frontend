import {
  MdOutlineDashboard,
  MdLaptop,
  MdOutlinePeopleAlt,
  MdOutlineAddLocationAlt,
  MdOutlineNotListedLocation,
  MdGroups,
} from "react-icons/md";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { IoAlertCircleSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
// import { FaUser } from "react-icons/fa";

export const routes = [
  {
    title: "Dashboard",
    href: "/",
    Icon: MdOutlineDashboard,
  },
  {
    title: "Device Management",
    href: "/device-list",
    Icon: MdLaptop,
  },
  {
    title: "Client Management",
    href: "/client",
    Icon: MdGroups,
  },
  {
    title: "Location",
    Icon: CiLocationOn,
    subRoutes: [
      {
        title: "Location Master",
        href: "/location",
        Icon: MdOutlineAddLocationAlt,
      },
      {
        title: "Location Health",
        href: "#",
        Icon: MdOutlineNotListedLocation,
      },
    ],
  },
  {
    title: "Users",
    href: "/user",
    Icon: MdOutlinePeopleAlt,
  },
  {
    title: "Alerts",
    href: "/alert",
    Icon: IoAlertCircleSharp,
  },
  {
    title: "Report",
    href: "#",
    Icon: LiaFileDownloadSolid,
  },
];
