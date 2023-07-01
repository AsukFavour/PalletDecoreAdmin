import React from "react";
import PropTypes from "prop-types";

import "./Layout.css";
import TopNavBar from "../TopNavBar/TopNavBar";
import Sidebar from "../SideNavBar/Sidebar";

const Layout = (props) => {
  return (
    <>
      <TopNavBar />
      <div className="contain">
        <Sidebar />
        <main id="main-content-container">{props.children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
