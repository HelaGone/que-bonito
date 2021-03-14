import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const VideoItem = (props) => {
  let {vid, title, thumb, description} = props;
  return(
    <Fragment>
      <li className="videoitem">
          <figure className="fig_item">
            <Link to={`/player/${vid}`}>
              <img src={thumb} alt={title} />
            </Link>
            <figcaption className="fig_caption">
              <h2>{title}</h2>
              {/*<p>{description}</p>*/}
            </figcaption>
          </figure>
      </li>
    </Fragment>
  );
}

export default VideoItem;
