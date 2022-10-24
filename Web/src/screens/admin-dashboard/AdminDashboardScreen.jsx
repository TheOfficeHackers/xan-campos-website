import React from "react";
import { useState } from "react";
import {
  CoverPicture,
  ConcertForm,
  ColaboForm,
  SidemanForm,
  Header
} from "../../components";
import "../admin-dashboard/AdminDashboardScreen.css";

function AdminDashboardScreen() {
  const [status, setStatus] = useState("concert");

  const handleCreateConcert = () => {
    setStatus("concert");
  };

  const handleCreateColabo = () => {
    setStatus("colabo");
  };

  const handleCreateSideman = () => {
    setStatus("sideman");
  };

  return (
    <>
      <Header color="danger"/>
      <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666542624/xan-campos-web/dashboard-cover_cdqiph.png" />

      <div className="position-absolute top-50 start-50 translate-middle">
        <div className= "d-flex justify-content-between mb-2">
        <div
          className="create-concert-label header-text fs-5"
          onClick={handleCreateConcert}
        >
          Create Concert
        </div>
        <div
          className="create-colabo-label header-text fs-5"
          onClick={handleCreateColabo}
        >
          Create Collabo
        </div>
        <div
          className="create-sideman-label header-text fs-5"
          onClick={handleCreateSideman}
        >
          Create Sideman
        </div>
        </div>
        {(() => {
          switch (status) {
            case "concert":
              return <ConcertForm />;
            case "colabo":
              return <ColaboForm />;
            case "sideman":
              return <SidemanForm />;
            default:
              return <ConcertForm />;
          }
        })()}
      </div>
    </>
  );
}

export default AdminDashboardScreen;
