import React from "react";
import { Section } from "../../../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";


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
      <Section className="mt-4" text="Xan Campos Trio"/>
      <div className="container mt-2" style={{maxWidth:"1000px"}}>
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

      <Section text="Sideman / Co-leader"/>
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

      <Section text="Collaborations"/>
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
};

export default VideoList;

