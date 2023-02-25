import React from "react";
import {
  ColabosList,
  WorkList,
  Footer,
  Header,
  CoverPicture,
  SidemanList,
  Section,
  ScrollButton
} from "../../components";
import "../works/WorksScreen.css";

function WorksScreen() {
  return (
    <>
      <Header color="dark"/>
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666366628/xan-campos-web/cover-works_ct7xqm.png" />
      <ScrollButton />
      <Section className="mt-3" text="Leader" />
      <WorkList className="pb-4"/>
      <Section className="sideman-section" text="Sideman / Co-leader" />
      <SidemanList />
      <Section className="colabo-section" text="Collaborations" />
      <ColabosList />
      <Footer />
    </>
  );
}

export default WorksScreen;
