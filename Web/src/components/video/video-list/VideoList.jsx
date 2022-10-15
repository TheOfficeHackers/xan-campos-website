import React, { useEffect } from "react";
import { useState } from "react";
import { getVideos } from "../../../services/website-service";
import ReactPlayer from "react-player/youtube";
//import "./VideoList.css"


function VideoList() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos()
      .then((videos) => setVideos(videos.data))
      .catch((err) => console.error(err));
  }, []);
  console.log(videos)

  return (
    <>
      <div>
      {
        videos
          ? videos.filter((video) => video.role === "Leader").map((video) => (      
                <ReactPlayer key={video.id} url={video.url} controls={true} />        
        ))
          : "Loading..."
      }  
      </div>
    </>
  )
}

export default VideoList