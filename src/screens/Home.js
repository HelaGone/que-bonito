import {Component, Fragment} from 'react';
import VideoItem from '../components/Videoitem.js';
import YouTube from "react-youtube";

const Home = (props) => {
  let {playlist, handleClick} = props;
  return(
    <Fragment>
      <section id="playlist_section" className="section_wrapper">
        <div className="playlist_wrapper">
          <ul className="playlist_list">
            {
              playlist = playlist.map((v, i) => {
                let urlsArr = v.snippet.thumbnails;
                let url = ("maxres" in urlsArr) ? v.snippet.thumbnails.maxres.url : v.snippet.thumbnails.high.url;
                let title = v.snippet.title;
                let description = v.snippet.description;
                let vID = v.snippet.resourceId.videoId;
                return (
                    <VideoItem key={vID}
                      vid={vID}
                      title={title}
                      thumb={url}
                      description={description}
                      handleClick={handleClick} />
                  );
              })
            }
          </ul>
        </div>
      </section>
    </Fragment>
  );
}
 export default Home;
