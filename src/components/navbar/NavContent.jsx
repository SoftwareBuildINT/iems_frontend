import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../routes";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

export const NavContent = ({ bgColor, textColor }) => {
  const [isOpen, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useClickAway(ref, () => {
    setOpen(false);
    setOpenSubMenu(null);
  });

  const handleSubMenuToggle = (idx) => {
    setOpenSubMenu((prev) => (prev === idx ? null : idx));
  };

  const handleNavigation = (href) => {
    if (href !== "#") {
      navigate(href);
      setOpen(false);
    }
  };

  return (
    <div ref={ref}>
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setOpen}
        color={textColor}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 bottom-0 w-4/5 2xl:w-1/4 lg:w-1/5 md:w-1/5 sm:w-3/5 min-w-[300px] shadow-4xl p-5 mt-[64px] z-50"
            style={{ backgroundColor: bgColor }}
          >
            <ul className="grid gap-1">
              {routes.map((route, idx) => {
                const { Icon, subRoutes } = route;
                const isActive = location.pathname === route.href;

                return (
                  <div key={route.title}>
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      className={`w-full p-[0.08rem] rounded-xl hover:bg-[#19223F] ${isActive ? 'bg-[#19223F]' : ''}`}
                    >
                      <button
                        onClick={() => {
                          if (subRoutes) {
                            handleSubMenuToggle(idx);
                          } else {
                            handleNavigation(route.href);
                          }
                        }}
                        className="flex items-center justify-between w-full rounded-xl p-3 bg-transparent border-none cursor-pointer"
                      >
                        <div className="flex items-center gap-3 justify-start">
                          <Icon
                            className={`text-sm 2xl:text-2xl md:text-base lg:text-lg sm:text-xs ${isActive ? 'text-[#E6FC5F]' : ''}`}
                            style={{ color: !isActive ? textColor : '' }}
                          />
                          <span
                            className={`flex gap-1 text-sm 2xl:text-2xl lg:text-base md:text-xs ${isActive ? 'text-[#E6FC5F]' : ''} select-none`}
                            style={{ color: !isActive ? textColor : '' }}
                          >
                            {route.title}
                          </span>
                        </div>
                        <div>
                          {subRoutes && (
                            <RiArrowDropDownLine
                              className="text-base 2xl:text-3xl"
                              style={{ color: textColor }}
                            />
                          )}
                        </div>
                      </button>
                    </motion.li>
                    {subRoutes && openSubMenu === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {subRoutes.map((subRoute) => {
                          const isSubActive = location.pathname === subRoute.href;

                          return (
                            <motion.li
                              key={subRoute.title}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1 + idx / 20,
                              }}
                              className={`w-full p-[0.08rem] rounded-xl hover:bg-[#19223F] ${isSubActive ? 'bg-[#19223F]' : ''}`}
                            >
                              <button
                                onClick={() => handleNavigation(subRoute.href)}
                                className="flex items-center justify-start w-full p-3 gap-3 rounded-xl bg-transparent border-none cursor-pointer"
                              >
                                <subRoute.Icon className={`text-sm 2xl:text-2xl md:text-base lg:text-lg sm:text-xs ${isSubActive ? 'text-[#E6FC5F]' : ''} select-none`}/>
                                <span className={`flex gap-1 text-sm 2xl:text-2xl lg:text-base md:text-xs ${isSubActive ? 'text-[#E6FC5F]' : ''} select-none`} style={{ color: textColor }}>
                                  {subRoute.title}
                                </span>
                              </button>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </div>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
