import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

const Navigation = (props) => {
  return(
    <Fragment>
      <nav id="comp_navigation">
        <ul className="nav_list">
          <Link to="/">
            <li className="nav_item inicio"></li>
          </Link>
          <Link to="/ahora-en-twitter" >
            <li className="nav_item twitter"></li>
          </Link>
          <Link to="/acerca" >
            <li className="nav_item acerca"></li>
          </Link>
          <Link to="/contacto/">
            <li className="nav_item contacto"></li>
          </Link>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Navigation;
