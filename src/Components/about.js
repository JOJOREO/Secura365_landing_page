import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);
  // console.log(props);
  const myComponentStyle = {
    // margin: "100px",
    marginBottom: 50,
    // marginTop: 50,
    // padding: "150px",
  };
  return (
    <div id="about" ref={ref} style={myComponentStyle}>
      <div className="about-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum facere
          unde aut! Repellendus porro minima in possimus repellat temporibus
          laborum sapiente, commodi tempora nam dolorum maxime cumque dolore
          dolor maiores
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
});

export default About;
