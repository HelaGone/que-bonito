import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";

const Acerca = (props) => {
  console.log("Acerca");
  return(
    <section>
      <h1>
        <Link to="/">
          Acerca
        </Link>
      </h1>
    </section>
  );
}

export default Acerca;
