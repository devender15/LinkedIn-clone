import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

export default function YoutubeVideo({ videoId }) {
  const [dimensions, setDimensions] = useState({
    height: "",
    width: "",
  });

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

      if (windowWidth < 640) {
        setDimensions({
          ...dimensions,
          width: "100%",
          height: windowWidth * 0.5625,
        });
      } else {
        setDimensions({ ...dimensions, width: "640", height: "390" });
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const options = {
    height: dimensions.height,
    width: dimensions.width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="video-container rounded-md w-full">
      <YouTube videoId={videoId} opts={options} className="rounded-md w-full" />
    </div>
  );
}
