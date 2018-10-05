import React from "react";
import { Link } from "gatsby";
import { FromRight } from "../components/poses";
import addTransition from "../components/addTransition";

const Index = () => (
  <div>
    <h1>animals</h1>
    <div>
      <Link to="/cat/">Go to cat</Link>
    </div>
    <div>
      <Link to="/dog/">Go to dog</Link>
    </div>
    <div>
      <Link to="/long-page/">Go to long page</Link>
    </div>
  </div>
);

addTransition(Index, FromRight);

export default Index;
