import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "../../routes";
import { RiArrowDropDownLine } from "react-icons/ri";

export const NavContent = ({ bgColor, textColor }) => {
  const [isOpen, setOpen] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
    setOpenSubMenu(null);
  });

  const handleSubMenuToggle = (idx) => {
    setOpenSubMenu((prev) => (prev === idx ? null : idx));
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
                      className="w-full p-[0.08rem] rounded-xl hover:bg-[#19223F]"
                    >
                      <a
                        onClick={() => {
                          if (subRoutes) {
                            handleSubMenuToggle(idx);
                          } else {
                            setOpen((prev) => !prev);
                          }
                        }}
                        className="flex items-center justify-between w-full rounded-xl"
                        href={subRoutes ? "#" : route.href}
                      >
                        <div className="flex items-center p-3 gap-3 justify-start">
                          <Icon
                            className="text-sm 2xl:text-2xl md:text-base lg:text-lg sm:text-xs"
                            style={{ color: textColor }}
                          />
                          <span
                            className="flex gap-1 text-sm 2xl:text-2xl lg:text-base md:text-xs "
                            style={{ color: textColor }}
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
                      </a>
                    </motion.li>
                    {subRoutes && openSubMenu === idx && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4"
                      >
                        {subRoutes.map((subRoute) => (
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
                            className="w-full p-[0.08rem] rounded-xl hover:bg-[#19223F]"
                          >
                            <a
                              onClick={() => setOpen((prev) => !prev)}
                              className="flex items-center justify-start w-full p-3 gap-3 rounded-xl"
                              href={subRoute.href}
                            >
                              <subRoute.Icon className="text-sm 2xl:text-2xl md:text-base lg:text-lg sm:text-xs" />
                              <span className="flex gap-1 text-sm 2xl:text-2xl lg:text-base md:text-xs">
                                {subRoute.title}
                              </span>
                            </a>
                          </motion.li>
                        ))}
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
