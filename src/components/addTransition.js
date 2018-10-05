const transitionWrapper = (PassedComponent, transition) => {
  return (PassedComponent.defaultProps = {
    transitionComponent: transition
  });
};

export default transitionWrapper;
