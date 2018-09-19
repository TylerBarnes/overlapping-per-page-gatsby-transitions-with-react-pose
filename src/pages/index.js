import React from "react";
import { Link } from "gatsby";
import { FromRight } from "../components/poses";

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

Index.defaultProps = {
  transitionComponent: FromRight
};

export default Index;
