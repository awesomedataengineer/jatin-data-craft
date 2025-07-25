import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltBlobProfileImage = ({ imageSrc, alt, blobColor}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,           // max tilt rotation
        speed: 400,        // transition speed
        glare: false,       // enable glare effect
        "max-glare": 0.3,  // max glare opacity
      });
    }

    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={tiltRef}
      className="relative w-80 h-80 lg:w-96 lg:h-96 mt-0 cursor-pointer"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 200 187"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="blob-mask" mask-type="alpha">
          <path
            fill={blobColor}
            d="M190.312 36.4879C206.582 62.1187 201.309 102.826 
               182.328 134.186C163.346 165.547 130.807 187.559 
               100.226 186.353C69.6454 185.297 41.0228 161.023 
               21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 
               6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 
               97.9666 0.00163737C136.23 0.303176 174.193 10.857 
               190.312 36.4879Z"
          />
        </mask>

        <g mask="url(#blob-mask)">
          <rect width="100%" height="100%" fill={blobColor} />
          <image
            href={imageSrc}
            x={0}
            y={20}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
    </div>
  );
};

export default TiltBlobProfileImage;
