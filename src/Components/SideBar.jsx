import React, { useState } from "react";
import "./Sidebar.scss";

import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/createProject",
      label: "Create Project",
      icon: <FaTh />,
    },
    {
      path: "/about",
      label: "Choose Cloud Provider",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      label: "Choose Database",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      label: "Upload ENV",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      label: "Set up CI/CD Pipeleine",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      label: "Monitoring Tool",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            DeployEase
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active" // It should be "activeClassName" instead of "activeclassName"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.label}
            </div>{" "}
            {/* Change "item.name" to "item.label" */}
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
