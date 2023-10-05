import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const CardAnimation = ({ children, className }) => {
  return (
    <ScrollAnimation
      animateIn="zoomIn"
      animateOut="zoomOut"
      className={`${className}`}
    >
      {children}
    </ScrollAnimation>
  );
};

export default CardAnimation;
