import { NavContent } from "./NavContent";
import ProfileDropdown from "./ProfileDropdown";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useNavigate, Outlet } from "react-router-dom";

export const Navbar = ({ bgColor, textColor }) => {
  const navigate = useNavigate();

  const responsiveStyle = {
    margin: "70px auto",
  };

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: bgColor }}
      >
        <nav className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-3 pl-4">
            <NavContent bgColor={bgColor} textColor={textColor} />
            <div className="logo font-bold text-2xl flex items-center space-x-2">
              <span
                className="text-xl sm:text-2xl 2xl:text-3xl select-none"
                style={{ color: textColor }}
              >
                BuildINT
              </span>
              <img
                src="src/assets/img/navbar/logo2_transparent.png"
                className="w-6 h-6 2xl:w-9 2xl:h-9 mt-1 select-none"
                alt="logo"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 px-5">
            <IoIosNotificationsOutline
              size={25}
              style={{ color: textColor }}
              className="cursor-pointer"
            />
            <ProfileDropdown
              bgColor={bgColor}
              textColor={textColor}
              handleLogout={handleLogout}
            />
          </div>
        </nav>
      </div>
      <div style={responsiveStyle}>
        <Outlet />
      </div>
    </>
  );
};
