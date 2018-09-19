import React from "react";
import { Link } from "gatsby";
import posed, { PoseGroup } from "react-pose";

import { CatTransition } from "../components/poses";

const LinkContainer = posed.div({
  enter: {
    x: "100%",
    delay: 0,
    beforeChildren: 300,
    transition: { duration: 3000 }
  },
  exit: { x: "0%", transition: { duration: 1000 } }
});

class Cat extends React.Component {
  render() {
    return (
      <div>
        <h1>meow</h1>
        <div>
          <Link to="/">Go to home</Link>
        </div>
        <div>
          <Link to="/dog/">Go to dog</Link>
        </div>
        <PoseGroup>
          <LinkContainer key="catlink">
            <Link to="/long-page/">Go to long page</Link>
          </LinkContainer>
        </PoseGroup>
      </div>
    );
  }
}

Cat.defaultProps = {
  transitionComponent: CatTransition
};

export default Cat;
