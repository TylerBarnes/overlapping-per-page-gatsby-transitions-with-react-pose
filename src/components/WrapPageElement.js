import React from 'react';
import posed, { PoseGroup } from 'react-pose';

import Layout from './Layout';
import { defaultPose } from './poses';

export const WrapPageElement = ({ element, props }) => {
  const { key } = props.location;
  const { pose } = element.props;

  const Pose = posed.div(pose || defaultPose);

  return (
    <Layout>
      <PoseGroup>
        <Pose key={key} {...props}>
          {element}
        </Pose>
      </PoseGroup>
    </Layout>
  );
};
