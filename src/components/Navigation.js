import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import btn_inicio from '../assets/home-04.svg';
import '../css/nav.css';

const Navigation = (props) => {
  return(
    <nav id="comp_navigation">
      <ul className="nav_list">
        <Link to="/">
          <li class="nav_item inicio"></li>
        </Link>
        <Link to="/ahora-en-twitter" >
          <li class="nav_item twitter"></li>
        </Link>
        <Link to="/acerca" >
          <li class="nav_item acerca"></li>
        </Link>
        <Link to="/contacto/">
          <li class="nav_item contacto"></li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
