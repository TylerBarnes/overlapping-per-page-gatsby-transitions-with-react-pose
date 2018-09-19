import React from "react";
import posed, { PoseGroup } from "react-pose";

import Layout from "./Layout";
import { DefaultPose } from "./poses";

export const WrapPageElement = ({ element, props }) => {
  const { key } = props.location;
  const { pose, transitionComponent } = element.props;

  const Pose = pose ? posed.div(pose) : DefaultPose;

  const UsedTransition = transitionComponent || Pose;

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
