import React from 'react';
import { useState } from "react";
import { CoverPicture, ConcertForm, ColaboForm, SidemanForm } from '../../components';



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
 }

  return (
    <>
    <CoverPicture src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666434490/xan-campos-web/179601_psavls.jpg"/>
    <div className="d-flex flex-column mt-5">
      <span className="header-text fs-5 me-5" onClick={handleCreateConcert}>Create Concert</span> 
      <span className="header-text fs-5" onClick={handleCreateColabo}>Create Colabo</span>
      <span className="header-text fs-5" onClick={handleCreateSideman}>Create Sideman</span>
      </div>
      <div className="position-absolute top-50 start-50 translate-middle">{(()=> {
        switch(status) {
          case "concert": return <ConcertForm />
          case "colabo": return <ColaboForm />
          case "sideman": return <SidemanForm />
          default: return <ConcertForm />
      }
    })()}
    </div>  
    </>
  )
}

export default AdminDashboardScreen