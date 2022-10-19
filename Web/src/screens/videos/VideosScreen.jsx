import React from 'react'
import { Header, VideoList } from '../../components'
import Footer from '../../components/footer/Footer'
import videopic from "../../images/cover-video2.png"

function VideosScreen() {
  return (
    <>
      <Header />
      <img src={videopic} alt="xan-campos" style={{width:"100%"}}/>
      <h2
      className="header-text"
      style={{
        position: "absolute",
        fontSize: "10rem",
        color: "white",
        top: "470px",
        left: "100px",
      }}
    >
      VIDEOS
    </h2> 
      <VideoList />
      <Footer />
    </>
  )
}

export default VideosScreen