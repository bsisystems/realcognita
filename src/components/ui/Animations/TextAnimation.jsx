import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const TextAnimation = ({ children, className }) => {
  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeOutDown"
      className={`${className}`}
    >
      {children}
    </ScrollAnimation>
  );
};

export default TextAnimation;
