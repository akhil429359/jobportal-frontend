// src/layouts/UserLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import UserFooter from "../components/UserFooter";
import BackButton from "../components/BackButton";

const UserLayout = () => {
  return (
    <>
      < UserNavbar/>   
      <BackButton />
      <main style={{ padding: "20px" }}>

        <Outlet /> 
      </main>
      <UserFooter/>
    </>
  );
};

export default UserLayout;
