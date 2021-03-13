import {Fragment} from 'react';
import YouTube from "react-youtube";

const Player = (props) => {
  

  let w =  window.innerWidth - 40;
  let h = (1080/1920) * w;
  let opts = {
    height: h,
    width: w,
    playerVars: {
      autoplay: 1
    }
  }

  console.log(props);
  return(
    <Fragment>
      <h2>Player</h2>
      <YouTube />
    </Fragment>
  );
}

export default Player;
