import React, { useEffect } from "react";
import { useState } from "react";
import { getVideos } from "../../../services/website-service";
import ReactPlayer from "react-player/youtube";
//import "./VideoList.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function VideoList() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos()
      .then((videos) => setVideos(videos.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(videos)
  if(!videos) return <></>

  return (
    <>
      <div>
      <Carousel > 
      {
        videos.filter((video) => video.role === "Leader").map((video) => (
                <div key={video.id}>
                  
                  <ReactPlayer  url={video.url} controls={true} renderItem="https://cdn.stocksnap.io/img-thumbs/960w/woodpecker-bird_6XMNEMASTW.jpg" /> 
                </div>                  
        ))
      }  
      </Carousel>
      </div>
    </>
  )
}


export default VideoList