import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const ProfileDropdown = ({ bgColor, textColor, handleLogout }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const dropDown = [
    {
      label: "Settings",
      action: () => setOpen(false),
      Icon: IoSettingsOutline,
    },
    {
      label: "Help",
      action: () => setOpen(false),
      Icon: IoIosHelpCircleOutline,
    },
    {
      label: "Logout",
      action: handleLogout,
      Icon: IoLogOutOutline,
    },
  ];

  return (
    <div ref={ref} className="relative">
      <div
        className="profile-dropdown-container"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CgProfile size={25} style={{ color: textColor }} />
        <div>
          <div className="profile-dropdown-user" style={{ color: textColor }}>
            User Name
          </div>
          <div className="profile-dropdown-role" style={{ color: textColor }}>
            User Role
          </div>
        </div>
        <RiArrowDropDownLine
          size={20}
          style={{ color: textColor }}
          className="profile-dropdown-arrow"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="profile-dropdown-content"
            style={{ backgroundColor: bgColor }}
          >
            <ul className="grid gap-1 2xl:gap-3 md:gap-0.5">
              {dropDown.map((item, idx) => {
                const { Icon } = item;

                return (
                  <motion.li
                    key={item.label}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 40,
                    }}
                    className="w-full p-[0.08rem] shadow-4xl border-b border-b-white/20 2xl:border-b-2 hover:bg-[#19223F]"
                  >
                    <button
                      onClick={() => {
                        setOpen(false);
                        item.action();
                      }}
                      className="flex items-center justify-start w-full p-3 gap-3"
                    >
                      <Icon
                        style={{ color: textColor }}
                        className="cursor-pointer"
                      />
                      <span
                        className="flex gap-1 text-base 2xl:text-xl md:text-sm cursor-pointer"
                        style={{ color: textColor }}
                      >
                        {item.label}
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
