import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProfileDropdown = ({ bgColor = "#0F172B", textColor = "#ffffff" }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  const dropDown = [
    {
      label: "Settings",
      href: "#",
      icon: "",
    },
    {
      label: "Help",
      href: "#",
      icon: "",
    },
    {
      label: "Logout",
      href: "#",
      icon: "",
    },
  ];

  return (
    <div ref={ref} className="relative">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <CgProfile size={25} style={{ color: textColor }} />
        <div>
          <div className="font-bold" style={{ color: textColor }}>
            User Name
          </div>
          <div className="text-sm" style={{ color: textColor }}>
            User Role
          </div>
        </div>
        <RiArrowDropDownLine size={20} style={{ color: textColor }} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-10%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-50"
            style={{ backgroundColor: bgColor }}
          >
            <ul className="grid gap-1">
              {dropDown.map((item, idx) => (
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
                  className="w-full p-[0.08rem] rounded-xl border-b border-b-white/20"
                >
                  <a
                    onClick={() => setOpen((prev) => !prev)}
                    className="flex items-center justify-start w-full p-3 gap-3 rounded-xl"
                    href={item.href}
                  >
                    <span className="flex gap-1 text-base" style={{ color: textColor }}>
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;
