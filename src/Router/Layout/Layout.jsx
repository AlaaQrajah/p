import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Contact } from "../../components/Contact/Contact";
import "../../../public/styles/layout/Layout.css";
export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Contact />
    </div>
  );
};
