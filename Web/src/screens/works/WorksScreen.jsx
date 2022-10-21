import React from "react";
import { ColabosList, WorkList } from "../../components";
import CoverPicture from "../../components/cover-picture/CoverPicture";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SidemanList from "../../components/sideman/sideman-list/SidemanList";

function WorksScreen() {
  return (
    <>
      <Header />
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666366628/xan-campos-web/cover-works_ct7xqm.png" />
      <WorkList />
      <ColabosList />
      <hr></hr> 
      <SidemanList /> 
      <Footer />
    </>
  );
}

export default WorksScreen;
