import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function MainLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
