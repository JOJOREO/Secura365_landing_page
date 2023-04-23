// import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/trial_pics/feature_1.png";
import featureimage2 from "../images/trial_pics/feature_2.png";
import featureimage3 from "../images/trial_pics/feature_3.png";
import React, { forwardRef } from "react";
const myComponentStyle = {
  // margin: "100px",
  marginBottom: 50,
  marginTop: 50,
  // padding: "150px",
};
// const Feature = () => {
const Feature = forwardRef((FeatureVariable, ref) => {
  return (
    <div id="features" ref={ref} style={myComponentStyle}>
      <div className="a-container">
        <FeatureBox
          image={featureimage}
          title="feature 1"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere"
        />
        <FeatureBox
          image={featureimage2}
          title="feature 2"
          description="unde aut! Repellendus porro minima in possimus repellat temporibus"
        />
        <FeatureBox
          image={featureimage3}
          title="feature 3"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere
          unde aut! Repellendus porro minima in possimus repellat temporibus
          laborum sapiente, commodi tempora nam dolorum maxime cumque dolore
          dolor maiores"
        />
      </div>
    </div>
  );
});

export default Feature;
