import React from "react";
import { ColabosList, WorkList } from "../../components";
import CoverPicture from "../../components/cover-picture/CoverPicture";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SidemanList from "../../components/sideman/sideman-list/SidemanList";
import xcnegative from "../../images/cover-works.png";

function WorksScreen() {
  return (
    <>
      <Header />
      <CoverPicture src={xcnegative} />
      <WorkList />
      
      <ColabosList />
      <hr></hr> 
      <SidemanList /> 
      <Footer />
    </>
  );
}

export default WorksScreen;
