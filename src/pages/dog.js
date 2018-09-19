import React from "react";
import { Link } from "gatsby";

const Dog = () => (
  <div>
    <h1>ruff</h1>
    <div>
      <Link to="/">Go to home</Link>
    </div>
    <div>
      <Link to="/cat/">Go to cat</Link>
    </div>
    <div>
      <Link to="/long-page/">Go to long page</Link>
    </div>
  </div>
);

export default Dog;
