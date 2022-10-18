import React from "react";
import Lottie from "react-lottie-player";
import Animation01 from "../../public/animation01.json";
import Animation404 from "../../public/animation-404.json";

export function AnimationMain() {
  return <Lottie loop animationData={Animation01} play />;
}

export function Error404() {
  return <Lottie loop animationData={Animation404} play />;
}
