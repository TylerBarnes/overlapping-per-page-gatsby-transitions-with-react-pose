import React from "react";
import { Link } from "gatsby";
import { FromLeft } from "../components/poses";
import addTransition from "../components/addTransition";

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

addTransition(Dog, FromLeft);

export default Dog;
