import posed from "react-pose";

const FromRight = posed.div({
  enter: { x: "0%", delay: 0, beforeChildren: 300 },
  exit: { x: "50%", transition: { duration: 1000 } }
});

const FromLeft = posed.div({
  enter: { x: "0%", delay: 0, beforeChildren: 300 },
  exit: { x: "-50%", transition: { duration: 1000 } }
});

const Fade = posed.div({
  enter: { opacity: 1, delay: 0, beforeChildren: 300 },
  exit: { opacity: 0, transition: { duration: 1000 } }
});

const CatTransition = posed.div({
  enter: { x: "10%", y: "100%", delay: 0, beforeChildren: 300 },
  exit: { x: "-50%", y: "0%", transition: { duration: 1000 } }
});

const DefaultPose = Fade;

export { FromLeft, FromRight, Fade, CatTransition, DefaultPose };
