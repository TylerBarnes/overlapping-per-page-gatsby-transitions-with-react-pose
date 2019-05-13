import React from "react";
import posed, { PoseGroup } from "react-pose";

import Layout from "./Layout";
import { DefaultPose, FromTop, CatTransition, FromRight } from "./poses";

export const WrapPageElement = ({ element, props }) => {
  const { key, pathname } = props.location;
  // element.props doesn't provide defaultProps for some reason in latest gatsby
  //const { pose, transitionComponent } = element.props;
  
  const routeToTransition = {
    "/dog/": FromTop,
    "/cat/": CatTransition,
    "/": FromRight,
  }

  const Pose = routeToTransition[pathname] || DefaultPose;

  const UsedTransition = Pose;
 
  return (
    <Layout>
      <PoseGroup>
        <UsedTransition key={key} {...props}>
          {element}
        </UsedTransition>
      </PoseGroup>
    </Layout>
  );
};
