const fromRight = {
  enter: { x: '0%', delay: 0, beforeChildren: 300 },
  exit: { x: '50%', transition: { duration: 1000 } }
};

const fromLeft = {
  enter: { x: '0%', delay: 0, beforeChildren: 300 },
  exit: { x: '-50%', transition: { duration: 1000 } }
};

const fade = {
  enter: { opacity: 1, delay: 0, beforeChildren: 300 },
  exit: { opacity: 0, transition: { duration: 1000 } }
};

const defaultPose = fade;

export { fromLeft, fromRight, fade, defaultPose };
