import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        React Reading List
      </Link>
      <Link className="navbar-brand" to="/kasdkugasdiasgudasyjgdasuyfas">
        No Match
      </Link>
      <Link className="navbar-brand" to="/books/5da1deb7de03f8918a5a3ae9">
        My Favorite Book
      </Link>
<<<<<<< HEAD

=======
>>>>>>> 1764fbbbaf631891e9f4169f3b0fe7dd2ecd19ab
    </nav>
  );
}

export default Nav;
