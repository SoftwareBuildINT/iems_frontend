import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Dropdown.css";

const Dropdown = ({
  header,
  values,
  containerWidth,
  bgColor,
  onChange,
  dropDirection,
  dropBorder,
}) => {
  const wrapper = {
    position: "relative",
    width: containerWidth,
    textAlign: "center",
  };

  const button = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "5px 15px",
    border: "1px solid",
    borderRadius: "8px",
    cursor: "pointer",
    background: bgColor,
  };

  const content = {
    position: "absolute",
    top: dropDirection,
    left: 0,
    marginTop: "2px",
    width: "100%",
    maxHeight: "100px",
    border: dropBorder,
    background: bgColor,
    borderRadius: "8px",
    overflow: "overlay",
    zIndex: 1000,
  };

  const [title, setTitle] = useState(header);
  const [isOpen, setIsOpen] = useState(false);

  const onElementClick = (value) => {
    setTitle(value);
    setIsOpen(false);
    onChange(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper" style={wrapper}>
      <div className="button" style={button} onClick={toggleDropdown}>
        {title}
        <RiArrowDropDownLine />
      </div>
      {isOpen && (
        <div className="content" style={content}>
          {values.map((value, index) => (
            <div
              onClick={() => onElementClick(value)}
              key={index}
              className="dropdown-item"
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
