import React from "react";
import { useRef } from "react";
import ReactPlayer from "react-player";

const VIDEO_PATH = "https://youtu.be/0BIaDVnYp2A";
const VideoPlayer = () => {
  const playerRef = useRef(null);
  return (
    <div>
      <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
    </div>
  );
};

export default VideoPlayer;
