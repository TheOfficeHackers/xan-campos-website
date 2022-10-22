import React from 'react'
import ReactPlayer from 'react-player'
import "./AutoPlayVideoHome.css"

function AutoplayVideoHome() {
  return (
    <div
  className="video"
  style={{
         position: "relative",
         paddingBottom: "56.25%" /* 16:9 */,
         paddingTop: 0,
         height: 0
       }}
>
    <iframe
        id="ytplayer"
       style={{
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%"
             }}
             src="https://www.youtube.com/embed/edkqrrHTZpw?autoplay=1&mute=1&playlist=edkqrrHTZpw&loop=1&controls=0&modestbranding=1"
             
           
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
    />
</div>

  )
}

export default AutoplayVideoHome