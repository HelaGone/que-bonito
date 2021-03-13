import React, {Component, Fragment} from 'react';
import YouTube from "react-youtube";

const Player = (props) => {

  const {vidID} = props.match.params;
  let w =  window.innerWidth - 40;
  let h = (1080/1920) * w;
  let opts = {
    height: h,
    width: w,
    playerVars: {
      autoplay: 1
    }
  }
  return(
    <Fragment>
      <section className="video_container">
        <YouTube videoId={vidID} className="video_item" opts={opts} />
      </section>
    </Fragment>
  );

}//End Class

export default Player;
