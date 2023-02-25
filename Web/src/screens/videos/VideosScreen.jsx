import React from "react";
import { Header, VideoList, Footer, ScrollButton } from "../../components";


function VideosScreen() {
  return (
    <>
      <Header color="danger"/>
      <img
        src="https://res.cloudinary.com/dyl3cklgp/image/upload/v1666521092/xan-campos-web/cover-videos2_ndbbho.png"
        alt="xan-campos"
        style={{ width: "100%" }}
      />  
      <ScrollButton />    
      <VideoList />
      <Footer />
    </>
  );
}

export default VideosScreen;
