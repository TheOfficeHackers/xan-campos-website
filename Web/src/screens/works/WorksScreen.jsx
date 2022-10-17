import React from "react";
import { ColabosList, WorkList } from "../../components";
import Header from "../../components/header/Header";

function WorksScreen() {
  return (
    <>
      <Header />
      <div className="container">
        <WorkList />
        <ColabosList />
      </div>
    </>
  );
}

export default WorksScreen;
