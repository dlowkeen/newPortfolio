import React from "react";
import { Parallax } from "react-parallax";
import SectionHead from "./SectionHead";

const ParallaxImage = props => (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={props.bgImage}
      bgImageAlt="the dog"
      strength={200}
    >
      <br />
      <br />
      <br />
      <br />
      <SectionHead name={props.words} />
      <div style={{ height: "350px" }} />
    </Parallax>
  </div>
);
export default ParallaxImage;
