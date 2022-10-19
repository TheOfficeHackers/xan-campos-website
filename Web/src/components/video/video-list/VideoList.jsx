import React, { useEffect } from "react";
//import { useState } from "react";
//import { getVideos } from "../../../services/website-service";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import CoverPicture from "../../cover-picture/CoverPicture";

const YoutubeSlide = ({ url, isSelected }) => (
  <ReactPlayer width="100%" url={url} />
);

function VideoList() {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} alt="cover-img" />;
    });

  return (
    <>
   
      
      <div className="container" style={{maxWidth:"1000px"}}>
        <Carousel
          renderItem={customRenderItem}
          renderThumbs={customRenderThumb}
        >
          <YoutubeSlide
            key="youtube-1"
            url="https://www.youtube.com/embed/ITokAIJQpyE"
          />
          <YoutubeSlide
            key="youtube-2"
            url="https://www.youtube.com/embed/JTFKsY1BIyI"
          />
          <YoutubeSlide
            key="youtube-3"
            url="https://www.youtube.com/embed/eXkb3FH7qSM"
          />
          <YoutubeSlide
            key="youtube-4"
            url="https://www.youtube.com/embed/edkqrrHTZpw"
          />
          <YoutubeSlide
            key="youtube-5"
            url="https://www.youtube.com/embed/bBY4m_MJN30"
          />
          <YoutubeSlide
            key="youtube-6"
            url="https://www.youtube.com/embed/lgSC76P6xAc"
          />
          <YoutubeSlide
            key="youtube-6"
            url="https://www.youtube.com/embed/vTywu_mUMiU"
          />
          <YoutubeSlide
            key="youtube-6"
            url="https://www.youtube.com/embed/Yms0D3_TyjY"
          />
          <YoutubeSlide
            key="youtube-6"
            url="https://www.youtube.com/embed/MijlessPJUI"
          />
          <YoutubeSlide
            key="youtube-6"
            url="https://www.youtube.com/embed/e2rneec766s"
          />
        </Carousel>
      </div>

      <div className="container" style={{maxWidth:"1000px"}}>
      <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
        <YoutubeSlide
          key="youtube-1"
          url="https://www.youtube.com/embed/4RSPeUlqFFc"
        />
        <YoutubeSlide
          key="youtube-2"
          url="https://www.youtube.com/embed/ku-TVA2zZBI"
        />
        <YoutubeSlide
          key="youtube-3"
          url="https://www.youtube.com/embed/PsGpyvrOiw0"
        />
        <YoutubeSlide
          key="youtube-4"
          url="https://www.youtube.com/embed/jw2cur0qJX0"
        />
        <YoutubeSlide
          key="youtube-4"
          url="https://www.youtube.com/embed/jw2cur0qJX0"
        />
      </Carousel>
      </div>

      <div className="container" style={{maxWidth:"1000px"}}>
      <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
        <YoutubeSlide
          key="youtube-1"
          url="https://www.youtube.com/embed/FWO0OjDYsBw"
        />
        <YoutubeSlide
          key="youtube-2"
          url="https://www.youtube.com/embed/1DRfg_mR2m0"
        />
      </Carousel>
      </div>
      
    </>
  );
}

export default VideoList;

// function VideoList() {
//   const [videos, setVideos] = useState(null);

//   useEffect(() => {
//     getVideos()
//       .then((videos) => setVideos(videos.data))
//       .catch((err) => console.error(err));
//   }, []);
//   console.log(videos)
//   if(!videos) return <></>

//   return (
//     <>
//       <div>
//       <Carousel />
//       {/* <Carousel >
//       {
//         videos.filter((video) => video.role === "Leader").map((video) => (
//                 <div key={video.id}>

//                   <ReactPlayer  url={video.url} controls={true} renderItem="https://cdn.stocksnap.io/img-thumbs/960w/woodpecker-bird_6XMNEMASTW.jpg" />
//                 </div>
//         ))
//       }
//       </Carousel> */}
//       </div>
//     </>
//   )
// }
