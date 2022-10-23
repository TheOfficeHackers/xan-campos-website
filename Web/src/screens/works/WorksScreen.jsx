import React from "react";
import {
  ColabosList,
  WorkList,
  Footer,
  Header,
  CoverPicture,
  SidemanList,
  Section,
} from "../../components";
import "../works/WorksScreen.css";

function WorksScreen() {
  return (
    <>
      <Header />
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666366628/xan-campos-web/cover-works_ct7xqm.png" />
      <Section className="mt-3" text="Leader" />
      <WorkList className="pb-4"/>
      <Section className="sideman-section" text="Sideman" />
      <SidemanList />
      <Section className="colabo-section" text="Collaborations" />
      <ColabosList />
      <Footer />
    </>
  );
}

export default WorksScreen;
