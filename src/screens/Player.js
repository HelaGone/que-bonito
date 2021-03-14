import React, {Component, Fragment} from 'react';
import YouTube from "react-youtube";

const Player = (props) => {
  const {vidID} = props.match.params;
  let w = (window.innerWidth >= 720) ? 720 : window.innerWidth;
  let h = (1080/1920) * w;
  let opts = {
    height: h,
    width: w,
    playerVars: {
      autoplay: 1
    }
  }

  // window.addEventListener('orientationchange', (event) => {
  //   console.log("changed");
  //   w = (window.innerWidth >= 720) ? 720 : window.innerWidth;
  //   h = (1080/1920) * w;
  // });

  return(
    <Fragment>
      <section className="video_container">
        <YouTube
          videoId={vidID}
          className="video_item"
          opts={opts}
          onStateChange={(evt) => console.log(evt.target)}
          onPlay={(evt) => console.log("play")}
          onPause={(evt)=>console.log("pause")}
          onEnd={(evt=>console.log("End"))}
          />
      </section>
    </Fragment>
  );

}//End Class

export default Player;
